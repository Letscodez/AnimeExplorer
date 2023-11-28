"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

export const fetchAnime = async (page: number) => {
  const resopnse = await fetch(
    `https://shikimori.one/api/animes?page=1${page}&limit=8&order=popularity`
  );

  const data = await resopnse.json();

  return data.map((item: AnimeProp, index : number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};
