const PAYLOAD_API_URL =
  process.env.NEXT_PUBLIC_PAYLOAD_API_URL || "https://newgfrpbackendss.vercel.app/api";

export async function fetchFooterComponent() {
  try {
    const res = await fetch(
      `${PAYLOAD_API_URL}/footer-component?depth=2&limit=100`,
      {
        next: { revalidate: 60 },
        cache: "force-cache", // Enable caching
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch footer component data");
    }

    const data = await res.json();

    // Filter active components
    const activeFooter =
      data.docs?.filter((footer: any) => footer.isActive) || [];

    return activeFooter[0] || null; // Return first active footer
  } catch (error) {
    console.error("Error fetching footer component:", error);
    return null;
  }
}

export function getImageUrl(imageField: any): string {
  if (!imageField) return "";

  if (typeof imageField === "object" && imageField.cloudinary_url) {
    return imageField.cloudinary_url;
  }

  if (typeof imageField === "object" && imageField.url) {
    return imageField.url;
  }

  if (typeof imageField === "string") {
    return imageField;
  }

  return "";
}
