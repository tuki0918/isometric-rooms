import { act, renderHook } from "@testing-library/react";
import {
  ReadonlyURLSearchParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useQueryParams } from "./useQueryParams";

const mocUseRouter = jest.fn<
  ReturnType<typeof useRouter>,
  Parameters<typeof useRouter>
>();
const mocUsePathname = jest.fn<
  ReturnType<typeof usePathname>,
  Parameters<typeof usePathname>
>();
const mockUseSearchParams = jest.fn<
  ReturnType<typeof useSearchParams>,
  Parameters<typeof useSearchParams>
>();

jest.mock("next/navigation", () => ({
  useRouter: () => mocUseRouter(),
  usePathname: () => mocUsePathname(),
  useSearchParams: () => mockUseSearchParams(),
}));

describe("useQueryParams", () => {
  const mockPush = jest.fn<
    ReturnType<typeof useRouter>["push"],
    Parameters<ReturnType<typeof useRouter>["push"]>
  >();
  const mockPathname = "/test";
  const mockSearchParams = new URLSearchParams();

  beforeEach(() => {
    jest.clearAllMocks();
    mocUseRouter.mockReturnValue({ push: mockPush } as unknown as ReturnType<
      typeof useRouter
    >);
    mocUsePathname.mockReturnValue(mockPathname);
    mockUseSearchParams.mockReturnValue(
      mockSearchParams as ReadonlyURLSearchParams,
    );
  });

  it("router.push is executed when setQueryParam is set", () => {
    const { result } = renderHook(() => useQueryParams());

    act(() => {
      result.current.setQueryParam("key", "value");
    });

    expect(mockPush.mock.calls[0][0]).toBe("/test?key=value");
  });
});
