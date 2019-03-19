// @ts-ignore
import { shallowMount } from '@vue/test-utils';

import TurbineStatus from '@/components/turbine/StatusCircle.vue';
import { Status } from '@/lib/turbine.ts';

describe('status-circle.vue', () => {
  test('turbine status accepts a turbine', () => {
    const turbine = getMockTurbineProps(Status.DISCONNECTED);
    const wrapper = shallowMount(TurbineStatus, {
      propsData: {
        turbine,
      },
    });
    expect(wrapper.props().turbine).toBe(turbine);
  });
});

function getMockTurbineProps(status: Status) {
  return {
    status,
  };
}

// test("when turbine is ONLINE status class is present", () => {
//   const turbine = getMockTurbineProps(Status.ONLINE);

//   const cmp = mount(TurbineStatus, {
//     propsData: {
//       turbine,
//     },
//   });

//   expect(cmp.contains(".status--online")).toBe(true);
//   expect(cmp.vm.getStatusClass).toBe("status--online");
// });

// test("when turbine is CONNECTING status class is present", () => {
//   const turbine = getMockTurbineProps(Status.CONNECTING);

//   const cmp = mount(TurbineStatus, {
//     propsData: {
//       turbine,
//     },
//   });

//   expect(cmp.contains(".status--connecting")).toBe(true);
//   expect(cmp.vm.getStatusClass).toBe("status--connecting");
// });

// test("when turbine is DISCONNECTED status class is present", () => {
//   const turbine = getMockTurbineProps(Status.DISCONNECTED);

//   const cmp = mount(TurbineStatus, {
//     propsData: {
//       turbine,
//     },
//   });

//   expect(cmp.contains(".status--offline")).toBe(true);
//   expect(cmp.vm.getStatusClass).toBe("status--offline");
// });
