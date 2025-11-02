// // const PAYLOAD_API_URL =
// //   process.env.NEXT_PUBLIC_PAYLOAD_API_URL || "http://localhost:3000/api";

// // // Fetch Home Page Global data
// // export async function fetchHomePage() {
// //   try {
// //     const res = await fetch(`${PAYLOAD_API_URL}/globals/home-page`, {
// //       next: { revalidate: 60 }, // Revalidate every 60 seconds
// //     });

// //     if (!res.ok) {
// //       throw new Error("Failed to fetch home page data");
// //     }

// //     return await res.json();
// //   } catch (error) {
// //     console.error("Error fetching home page:", error);
// //     return null;
// //   }
// // }

// // // Helper function to get image URL
// // export function getImageUrl(imageField: any): string {
// //   if (!imageField) return "";

// //   // If it's a media object with url
// //   if (typeof imageField === "object" && imageField.url) {
// //     return imageField.url;
// //   }

// //   // If it's just a string URL
// //   if (typeof imageField === "string") {
// //     return imageField;
// //   }

// //   return "";
// // }

// // // Helper to convert rich text to HTML
// // export function richTextToHtml(richText: any): string {
// //   if (!richText) return "";

// //   // If it's already a string, return it
// //   if (typeof richText === "string") return richText;

// //   // If it's Payload's rich text format (Lexical/Slate)
// //   try {
// //     if (Array.isArray(richText)) {
// //       return richText
// //         .map((node) => {
// //           if (node.type === "paragraph") {
// //             const text =
// //               node.children
// //                 ?.map((child: any) => {
// //                   let content = child.text || "";
// //                   if (child.bold) content = `<strong>${content}</strong>`;
// //                   if (child.italic) content = `<em>${content}</em>`;
// //                   if (child.underline) content = `<u>${content}</u>`;
// //                   if (child.code) content = `<code>${content}</code>`;
// //                   return content;
// //                 })
// //                 .join("") || "";
// //             return `<p>${text}</p>`;
// //           }
// //           if (node.type === "heading") {
// //             const text =
// //               node.children?.map((child: any) => child.text).join("") || "";
// //             const level = node.tag || "h2";
// //             return `<${level}>${text}</${level}>`;
// //           }
// //           if (node.type === "list") {
// //             const tag = node.listType === "number" ? "ol" : "ul";
// //             const items =
// //               node.children
// //                 ?.map((item: any) => {
// //                   const text =
// //                     item.children?.map((child: any) => child.text).join("") ||
// //                     "";
// //                   return `<li>${text}</li>`;
// //                 })
// //                 .join("") || "";
// //             return `<${tag}>${items}</${tag}>`;
// //           }
// //           return "";
// //         })
// //         .join("");
// //     }
// //   } catch (error) {
// //     console.error("Error parsing rich text:", error);
// //   }

// //   return "";
// // }



// const PAYLOAD_API_URL =
//   process.env.NEXT_PUBLIC_PAYLOAD_API_URL || "https://newgfrpbackendss.vercel.app/api/";

// // Fetch Home Page Global data
// export async function fetchHomePage() {
//   try {
//     const res = await fetch(`${PAYLOAD_API_URL}/globals/home-page?depth=2`, {
//       next: { revalidate: 60 }, // Revalidate every 60 seconds
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch home page data");
//     }

//     return await res.json();
//   } catch (error) {
//     console.error("Error fetching home page:", error);
//     return null;
//   }
// }

// // Helper function to get image URL
// export function getImageUrl(imageField: any): string {
//   if (!imageField) return "";

//   // If it's a media object with url
//   if (typeof imageField === "object" && imageField.url) {
//     return imageField.url;
//   }

//   // If it's just a string URL
//   if (typeof imageField === "string") {
//     return imageField;
//   }

//   return "";
// }

// // Helper to convert rich text to HTML
// export function richTextToHtml(richText: any): string {
//   if (!richText) return "";

//   // If it's already a string, return it
//   if (typeof richText === "string") return richText;

//   // If it's Payload's rich text format (Lexical/Slate)
//   try {
//     if (Array.isArray(richText)) {
//       return richText
//         .map((node) => {
//           if (node.type === "paragraph") {
//             const text =
//               node.children
//                 ?.map((child: any) => {
//                   let content = child.text || "";
//                   if (child.bold) content = `<strong>${content}</strong>`;
//                   if (child.italic) content = `<em>${content}</em>`;
//                   if (child.underline) content = `<u>${content}</u>`;
//                   if (child.code) content = `<code>${content}</code>`;
//                   return content;
//                 })
//                 .join("") || "";
//             return `<p>${text}</p>`;
//           }
//           if (node.type === "heading") {
//             const text =
//               node.children?.map((child: any) => child.text).join("") || "";
//             const level = node.tag || "h2";
//             return `<${level}>${text}</${level}>`;
//           }
//           if (node.type === "list") {
//             const tag = node.listType === "number" ? "ol" : "ul";
//             const items =
//               node.children
//                 ?.map((item: any) => {
//                   const text =
//                     item.children?.map((child: any) => child.text).join("") ||
//                     "";
//                   return `<li>${text}</li>`;
//                 })
//                 .join("") || "";
//             return `<${tag}>${items}</${tag}>`;
//           }
//           return "";
//         })
//         .join("");
//     }
//   } catch (error) {
//     console.error("Error parsing rich text:", error);
//   }

//   return "";
// }


const PAYLOAD_API_URL =
  process.env.NEXT_PUBLIC_PAYLOAD_API_URL || "https://newgfrpbackendss.vercel.app/api";

export async function fetchHomePage() {
  try {
    const res = await fetch(`${PAYLOAD_API_URL}/globals/home-page?depth=2`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch home page data");
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching home page:", error);
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