const PAYLOAD_API_URL =
  process.env.NEXT_PUBLIC_PAYLOAD_API_URL || "https://newgfrpbackendss.vercel.app/api";

export async function fetchFAQSection() {
  try {
    const res = await fetch(
      `${PAYLOAD_API_URL}/faq?where[componentType][equals]=faq-section&where[isActive][equals]=true&depth=2&limit=100`,
      {
        next: { revalidate: 60 },
        cache: "force-cache",
      }
    );

    if (!res.ok) {
      console.error(`API Response Status: ${res.status}`);
      const errorText = await res.text();
      console.error(`API Response: ${errorText}`);
      throw new Error("Failed to fetch FAQ section data");
    }

    const data = await res.json();

    // Filter active sections and sort by order
    const activeSections =
      data.docs?.filter((section: any) => section.isActive) || [];
    activeSections.sort((a: any, b: any) => (a.order || 0) - (b.order || 0));

    return activeSections[0] || null;
  } catch (error) {
    console.error("Error fetching FAQ section:", error);
    return null;
  }
}
