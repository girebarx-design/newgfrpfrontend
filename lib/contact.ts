// // lib/api/contact.ts (or utils/api/contact.ts)

// const PAYLOAD_API_URL =
//   process.env.NEXT_PUBLIC_PAYLOAD_API_URL || "https://newgfrpbackendss.vercel.app/api";

// export async function fetchContactSection() {
//   try {
//     const res = await fetch(`${PAYLOAD_API_URL}/contact?depth=2&limit=100`, {
//       next: { revalidate: 60 },
//       cache: "force-cache",
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch contact section data");
//     }

//     const data = await res.json();

//     // Filter active sections and sort by order
//     const activeSections =
//       data.docs?.filter((section: any) => section.isActive) || [];
//     activeSections.sort((a: any, b: any) => (a.order || 0) - (b.order || 0));

//     return activeSections[0] || null; // Return first active section
//   } catch (error) {
//     console.error("Error fetching contact section:", error);
//     return null;
//   }
// }

// export async function submitContactForm(formData: {
//   first_name: string;
//   last_name: string;
//   email_address: string;
//   phone: string;
//   city?: string;
//   message: string;
// }) {
//   try {
//     const res = await fetch(`${PAYLOAD_API_URL}/contact-submissions`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     });

//     if (!res.ok) {
//       const errorData = await res.json();
//       throw new Error(errorData.message || "Failed to submit form");
//     }

//     const data = await res.json();
//     return { success: true, data };
//   } catch (error: any) {
//     console.error("Error submitting contact form:", error);
//     return { success: false, error: error.message };
//   }
// }

// export function getImageUrl(imageField: any): string {
//   if (!imageField) return "";

//   if (typeof imageField === "object" && imageField.cloudinary_url) {
//     return imageField.cloudinary_url;
//   }

//   if (typeof imageField === "object" && imageField.url) {
//     return imageField.url;
//   }

//   if (typeof imageField === "string") {
//     return imageField;
//   }

//   return "";
// }

// export function richTextToHtml(richText: any): string {
//   if (!richText) return "";

//   if (typeof richText === "string") return richText;

//   // Handle Lexical editor format (root.children)
//   if (richText.root && richText.root.children) {
//     try {
//       return richText.root.children
//         .map((node: any) => {
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
//     } catch (error) {
//       console.error("Error parsing rich text:", error);
//     }
//   }

//   return "";
// }



// lib/api/contact.ts (or utils/api/contact.ts)

const PAYLOAD_API_URL =
  process.env.NEXT_PUBLIC_PAYLOAD_API_URL || "http://newgfrpbackendss.vercel.app/api";

// Test function to check if the endpoint exists
export async function testContactSubmissionsEndpoint() {
  try {
    const res = await fetch(`${PAYLOAD_API_URL}/contact-submissions`, {
      method: "GET",
    });
    console.log("Endpoint test status:", res.status);
    return res.ok;
  } catch (error) {
    console.error("Endpoint test failed:", error);
    return false;
  }
}

export async function fetchContactSection() {
  try {
    const res = await fetch(
      `${PAYLOAD_API_URL}/contact?depth=2&limit=100`,
      {
        next: { revalidate: 60 },
        cache: "force-cache",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch contact section data");
    }

    const data = await res.json();

    // Filter active sections and sort by order
    const activeSections =
      data.docs?.filter((section: any) => section.isActive) || [];
    activeSections.sort((a: any, b: any) => (a.order || 0) - (b.order || 0));

    return activeSections[0] || null; // Return first active section
  } catch (error) {
    console.error("Error fetching contact section:", error);
    return null;
  }
}

export async function submitContactForm(formData: {
  first_name: string;
  last_name: string;
  email_address: string;
  phone: string;
  city?: string;
  message: string;
}) {
  try {
    console.log("Submitting to:", `${PAYLOAD_API_URL}/contact-submissions`);
    console.log("Form data being sent:", formData);

    const res = await fetch(`${PAYLOAD_API_URL}/contact-submissions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    console.log("Response status:", res.status);
    
    const responseData = await res.json();
    console.log("Response data:", responseData);

    if (!res.ok) {
      throw new Error(responseData.message || responseData.error || "Failed to submit form");
    }

    return { success: true, data: responseData };
  } catch (error: any) {
    console.error("Error submitting contact form:", error);
    return { success: false, error: error.message };
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