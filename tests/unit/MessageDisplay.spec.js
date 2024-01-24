import MessageDisplay from "@/components/MessageDisplay";
import { mount } from "@vue/test-utils";
import { getMessage } from "@/services/axios";
import { flushPromises } from "flush-promises";

// import axios from "axios";
// jest.spyOn(axios, "get").mockResolvedValue(MessageDisplay);
jest.mock("@/services/axios");

describe("MessageDisplay", () => {
  it("Calls getMessage and displays message", async () => {
    const mockMessage = "Hello from the db!";
    getMessage.mockResolvedValueOnce({ text: mockMessage });
    const wrapper = mount(MessageDisplay);

    await flushPromises();
    expect(getMessage).toHaveBeenCalledTimes(1);

    const message = wrapper.find('[data-testid="message"]').text();
    expect(message).toEqual(mockMessage);
  });

  it.skip("Displays an error when getMessage call fails", async () => {
    // const mockMessage = "Hello from the db!"
    // getMessage.mockResolvedValueOnce({ text: mockMessage })
    const wrapper = mount(MessageDisplay);

    // await flushPromises();
    // expect(getMessage).toHaveBeenCalledTimes(1);

    // const message = wrapper.find("[data-testid="message"]").text();
    // check that call happened once
    // check that component displays error
  });
});
