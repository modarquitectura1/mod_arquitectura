"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

// Utility function to combine class names (similar to cn from shadcn)
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

// Pagination Arrow Component
const PaginationArrow = ({ direction, href, isDisabled }) => {
  const router = useRouter();
  const isLeft = direction === "left";

  const handleClick = (e) => {
    e.preventDefault();
    if (!isDisabled) {
      router.push(href);
    }
  };

  return (
    <button
      onClick={handleClick}
      aria-label={isLeft ? "Go to previous page" : "Go to next page"}
      aria-disabled={isDisabled}
      disabled={isDisabled}
      className={cn(
        "pagination-button pagination-arrow",
        isDisabled ? "pagination-button-ghost" : "pagination-button-outline"
      )}
    >
      {isLeft ? "«" : "»"}
    </button>
  );
};

// Main Pagination Component
export function PaginationComponent({ pageCount, className }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  // Don't render if there's only one page or no pages
  if (pageCount <= 1) {
    return null;
  }

  return (
    <nav className={cn("pagination", className)}>
      <ul className="pagination-content">
        <li className="pagination-item">
          <PaginationArrow
            direction="left"
            href={createPageURL(currentPage - 1)}
            isDisabled={currentPage <= 1}
          />
        </li>
        <li className="pagination-item">
          <span className="pagination-page-info">Page {currentPage}</span>
        </li>
        <li className="pagination-item">
          <PaginationArrow
            direction="right"
            href={createPageURL(currentPage + 1)}
            isDisabled={currentPage >= pageCount}
          />
        </li>
      </ul>
    </nav>
  );
}

export default PaginationComponent;
