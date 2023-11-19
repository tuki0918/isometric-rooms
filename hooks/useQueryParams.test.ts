import { act, renderHook } from "@testing-library/react";
import { useQueryParams } from "./useQueryParams";

const useRouter = jest.fn();
const usePathname = jest.fn();
const useSearchParams = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => useRouter(),
  usePathname: () => usePathname(),
  useSearchParams: () => useSearchParams(),
}));

describe("useQueryParams", () => {
  const mockPush = jest.fn();
  const mockPathname = "/test";
  const mockSearchParams = new URLSearchParams();

  beforeEach(() => {
    jest.clearAllMocks();
    useRouter.mockReturnValue({ push: mockPush });
    usePathname.mockReturnValue(mockPathname);
    useSearchParams.mockReturnValue(mockSearchParams);
  });

  it("router.push is executed when setQueryParam is set", () => {
    const { result } = renderHook(() => useQueryParams());

    act(() => {
      result.current.setQueryParam("key", "value");
    });

    expect(mockPush.mock.calls[0][0]).toBe("/test?key=value");
  });
});
