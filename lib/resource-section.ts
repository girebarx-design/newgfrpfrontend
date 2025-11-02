const PAYLOAD_API_URL =
  process.env.NEXT_PUBLIC_PAYLOAD_API_URL || "https://newgfrpbackendss.vercel.app/api";

export async function fetchResourcesSection() {
  try {
    const res = await fetch(
      `${PAYLOAD_API_URL}/resources-section?depth=2&limit=100`,
      {
        next: { revalidate: 60 },
        cache: "force-cache",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch resources section data");
    }

    const data = await res.json();

    // Filter active sections and sort by order
    const activeSections =
      data.docs?.filter((section: any) => section.isActive) || [];
    activeSections.sort((a: any, b: any) => (a.order || 0) - (b.order || 0));

    return activeSections[0] || null; // Return first active section
  } catch (error) {
    console.error("Error fetching resources section:", error);
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

export function richTextToHtml(richText: any): string {
  if (!richText) return "";

  if (typeof richText === "string") return richText;

  // Handle Lexical editor format (root.children)
  if (richText.root && richText.root.children) {
    try {
      return richText.root.children
        .map((node: any) => {
          if (node.type === "paragraph") {
            const text =
              node.children
                ?.map((child: any) => {
                  let content = child.text || "";
                  if (child.bold) content = `<strong>${content}</strong>`;
                  if (child.italic) content = `<em>${content}</em>`;
                  if (child.underline) content = `<u>${content}</u>`;
                  if (child.code) content = `<code>${content}</code>`;
                  return content;
                })
                .join("") || "";
            return `<p>${text}</p>`;
          }
          if (node.type === "heading") {
            const text =
              node.children?.map((child: any) => child.text).join("") || "";
            const level = node.tag || "h2";
            return `<${level}>${text}</${level}>`;
          }
          if (node.type === "list") {
            const tag = node.listType === "number" ? "ol" : "ul";
            const items =
              node.children
                ?.map((item: any) => {
                  const text =
                    item.children?.map((child: any) => child.text).join("") ||
                    "";
                  return `<li>${text}</li>`;
                })
                .join("") || "";
            return `<${tag}>${items}</${tag}>`;
          }
          return "";
        })
        .join("");
    } catch (error) {
      console.error("Error parsing rich text:", error);
    }
  }

  return "";
}
