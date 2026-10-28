"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { track } from "@/app/lib/track";

const WAIT_BETWEEN_CHANGE = 500;

export default function Search({ placeholder }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      track("filter_search", { scope: pathname, query: term.trim().toLowerCase() });
      params.delete("filter");
      params.set("search", term);
    } else {
      params.delete("search");
    }

    replace(`${pathname}?${params.toString()}`);
  }, WAIT_BETWEEN_CHANGE);

  return (
    <div>
      <input
        className="form-control"
        placeholder={placeholder}
        onChange={(event) => handleSearch(event.target.value)}
        defaultValue={searchParams.get("search")?.toString()}
      />
    </div>
  );
}
