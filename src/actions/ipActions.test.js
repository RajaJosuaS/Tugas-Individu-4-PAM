import axios from "axios";
jest.mock("axios");
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { fetchIpRequest, fetchIpSuccess } from "./ipActions";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("fetchIpRequest", () => {
  it("should dispatch fetchIpSuccess with IP data", () => {
    const ip = "192.168.1.1";
    const response = { data: { ip } };
    axios.get.mockResolvedValue(response);

    const expectedActions = [fetchIpSuccess(ip)];
    const store = mockStore({});

    return store.dispatch(fetchIpRequest()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});