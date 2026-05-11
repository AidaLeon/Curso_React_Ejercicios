import { describe, expect, test, vi, beforeEach } from "vitest";
import { useGifs } from "./useGifs";
import { renderHook } from "@testing-library/react";
import { act } from "react";
import * as gifActions from "../actions/get-gifs-by-query.action";
import { gifsMock } from "../../test/mocks/gifs.data";



describe("useGifs", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    test('should reutrn default values and methods', () => {
        const {result}=renderHook(() => useGifs());
        expect(result.current.gifs.length).toBe(0);
        expect(result.current.previousSearches.length).toBe(0);
        expect(typeof result.current.handleSearch).toBeDefined();
        expect(typeof result.current.handleTermClick).toBeDefined();

        
    });

    test('should return a list of gifs', async () => {
        vi.spyOn(gifActions, 'getGifsByQuery')
        .mockResolvedValue(gifsMock);
        
        const {result}=renderHook(() => useGifs());
        
        await act(async() => {
           await result.current.handleSearch('goku');
        })
        
        expect(result.current.gifs.length).toBe(10);
    });
    test('should returno no more than 8 previous terms', async () => {
        vi.spyOn(gifActions, 'getGifsByQuery')
        .mockResolvedValue(gifsMock);

        const {result}=renderHook(() => useGifs());
        
        await act(async() => {
           await result.current.handleSearch('goku1');
        })
        await act(async() => {
           await result.current.handleSearch('goku2');
        })
        await act(async() => {
           await result.current.handleSearch('goku3');
        })
        await act(async() => {
           await result.current.handleSearch('goku4');
        })
        await act(async() => {
           await result.current.handleSearch('goku5');
        })
        await act(async() => {
           await result.current.handleSearch('goku6');
        })
        await act(async() => {
           await result.current.handleSearch('goku7');
        })
        await act(async() => {
           await result.current.handleSearch('goku8');
        })
        await act(async() => {
           await result.current.handleSearch('goku9');
        })
        
        expect(result.current.previousSearches.length).toBe(8);
        expect(result.current.previousSearches).toEqual(['goku9', 'goku8', 'goku7', 'goku6', 'goku5', 'goku4', 'goku3', 'goku2']);
    });
});
