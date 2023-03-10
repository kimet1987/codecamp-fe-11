import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import StaticRoutingMovedPage from "../../pages/section33/33-05-jest-unit-test-mocking";
import fetch from "cross-fetch";
import mockRouter from "next-router-mock";

jest.mock("next/router", () => require("next-router-mock"));

it("게시글이 잘 등록 됐는지 테스트하자", async () => {
  const client = new ApolloClient({
    link: new HttpLink({
      uri: "http://mock.com/graphql",
      fetch,
    }),

    cache: new InMemoryCache(),
  });
  render(
    <ApolloProvider client={client}>
      <StaticRoutingMovedPage />
    </ApolloProvider>
  );

  fireEvent.change(screen.getByRole("input-writer"), {
    target: { value: "맹구" },
  });
  fireEvent.change(screen.getByRole("input-title"), {
    target: { value: "인녕하세여" },
  });
  fireEvent.change(screen.getByRole("input-contents"), {
    target: { value: "반갑습니다" },
  });

  fireEvent.click(screen.getByRole("submit-btn"));

  await waitFor(() => {
    expect(mockRouter.asPath).toEqual("/boards/qqq");
  });
});
