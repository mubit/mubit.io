import EventSource from 'eventsource-polyfill';

Object.defineProperty(global, 'EventSource', EventSource);

import { mount } from '@vue/test-utils';
import TurbineStatus from '@/components/turbine/turbine-status';
import { Status } from '@/lib/turbine.ts';

function getMockTurbineProps(status) {
  return {
    status,
  };
}

test('turbine status accepts a turbine', () => {
  const turbine = getMockTurbineProps(Status.DISCONNECTED);

  const cmp = mount(TurbineStatus, {
    propsData: {
      turbine,
    },
  });

  expect(cmp.props().turbine).toBe(turbine);
});

test('when turbine is ONLINE status class is present', () => {
  const turbine = getMockTurbineProps(Status.ONLINE);

  const cmp = mount(TurbineStatus, {
    propsData: {
      turbine,
    },
  });

  expect(cmp.contains('.status--online')).toBe(true);
  expect(cmp.vm.getStatusClass).toBe('status--online');
});

test('when turbine is CONNECTING status class is present', () => {
  const turbine = getMockTurbineProps(Status.CONNECTING);

  const cmp = mount(TurbineStatus, {
    propsData: {
      turbine,
    },
  });

  expect(cmp.contains('.status--connecting')).toBe(true);
  expect(cmp.vm.getStatusClass).toBe('status--connecting');
});

test('when turbine is DISCONNECTED status class is present', () => {
  const turbine = getMockTurbineProps(Status.DISCONNECTED);

  const cmp = mount(TurbineStatus, {
    propsData: {
      turbine,
    },
  });

  expect(cmp.contains('.status--offline')).toBe(true);
  expect(cmp.vm.getStatusClass).toBe('status--offline');
});
