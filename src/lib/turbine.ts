import Axios from 'axios';
// @ts-ignore
import { NativeEventSource, EventSourcePolyfill } from 'event-source-polyfill';

const EventSource = NativeEventSource || EventSourcePolyfill;

export enum Status {
  DISCONNECTED = 'disconnected',
  CONNECTING = 'connecting',
  ONLINE = 'online',
}

class Store {
  private data: string[];
  private capacity: number;

  constructor(capacity: number = 10) {
    this.data = new Array<string>();
    this.capacity = capacity;
  }

  public push(message: string) {
    if (this.data.length === this.capacity) {
      this.data.shift();
    }
    this.data.push(message);
  }
}

export class Turbine {
  public status: Status;
  public label: string;
  private host: string;
  private channel: string;
  private store: Store;

  constructor(domain: string, label: string = '', protocol: string = 'https') {
    this.label = label;
    this.host = `${protocol}://${domain}/v1/rtm/`;
    this.channel = 'mubit.welcome';

    this.status = Status.DISCONNECTED;
    this.store = new Store();
  }

  public connect() {
    const eventSource = new EventSource(`${this.host}${this.channel}`);
    this.registerEvents(eventSource);
    this.status = Status.CONNECTING;
  }

  public publish(payload: string) {
    return Axios.post(`${this.host}${this.channel}`, payload);
  }

  private registerEvents(eventSource: EventSource) {
    eventSource.addEventListener('open', () => {
      this.status = Status.ONLINE;
    });

    eventSource.addEventListener('message', (e: any) => {
      this.store.push(e.data);
    });

    eventSource.addEventListener('close', () => {
      this.status = Status.DISCONNECTED;
    });
    eventSource.addEventListener('error', () => {
      this.status = Status.DISCONNECTED;
    });
  }
}

export const globalTurbine = new Turbine(
  'turbine.mubit.io',
  'eu-west-1',
  'https',
);
export const localTurbine = new Turbine('localhost:8000', 'localhost', 'http');

globalTurbine.connect();
if (process.env.NODE_ENV !== 'production') {
  localTurbine.connect();
}

export default {
  Turbine,
  Status,
  globalTurbine,
  localTurbine,
};
