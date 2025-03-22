"use client";

import type React from "react";

import { useState } from "react";
import { useTranslation } from "@/hooks/use-translation";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const { t } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  const removeSearchChar = (e: any) => {
    e?.preventDefault();
    setQuery("");
    onSearch("");
  };

  return (
    <div className="flex flex-row w-full justify-evenly items-center bg-searchBackground rounded-md border-2 border-transparent focus-within:border-searchOutlineFocus">
      <div className="flex items-center pl-3">
        <img
          src="/assets/Search.svg"
          className="h-[16px] w-[16px]"
          alt="back-btn"
        />
      </div>
      <input
        type="text"
        className="w-full pl-2 py-2 pr-2 bg-searchBackground border-none text-searchInputText font-[600] rounded-md focus:outline-none placeholder:font-semibold focus:ring-none"
        placeholder={t("search_placeholder")}
        value={query}
        onChange={handleChange}
      />
      {query.length > 0 && (
        <div
          className="cursor-pointer flex items-center pr-3"
          onClick={removeSearchChar}
        >
          <img
            src="/assets/Cancel.svg"
            className="h-[12px] w-[12px]"
            alt="back-btn"
          />
        </div>
      )}
    </div>
  );
}
