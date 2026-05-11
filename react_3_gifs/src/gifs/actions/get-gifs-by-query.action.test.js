
import { describe, test, expect } from "vitest";
import AxiosMockAdapter from "axios-mock-adapter";
import { giphyApi } from "../api/giphy.api";
import { getGifsByQuery } from "./get-gifs-by-query.action";
import { giphySearchResponseMock } from "../../test/mocks/giphy.response.data";



describe("getGifsByQuery", () => {
   
const mock = new AxiosMockAdapter(giphyApi);

    test("should return a list of gifs", async () => {
        mock.onGet("/search").reply(200, giphySearchResponseMock);

        const gifs = await getGifsByQuery("goku");
        

        gifs.forEach((gif) => {
            expect(gif.id).toBeDefined();
            expect(gif.url).toBeDefined();
            expect(gif.title).toBeDefined();
            expect(gif.width).toBeDefined();
            expect(gif.height).toBeDefined();
        });
        

        
    });
});
