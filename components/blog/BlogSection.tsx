// // // import axios from "axios";
// // // import Link from "next/link";
// // // import { useEffect, useState } from "react";

// // // import { motion } from "framer-motion";
// // // import FadeInOnScroll from "../animation/FadeInOnScroll";
// // // import { useLoader } from "../LoaderContext";


// // // export default function BlogSection() {
// // //   const [blog, setBlog] = useState(null);

// // //   const { setHideLoader } = useLoader();
    
// // //       function doReverse(e) {
// // //         // e.preventDefault();
// // //         setHideLoader(false);
    
// // //         setTimeout(() => {
// // //           setHideLoader(true);
// // //         }, 4000);
// // //       }

// // //   useEffect(() => {
// // //     axios
// // //       .get("https://gfrp-india.onrender.com/api/blog_home_list/") // your Django endpoint
// // //       .then((response) => {
// // //         setBlog(response.data); // it's a single object, not an array
// // //       })
// // //       .catch((error) => {
// // //         console.error("Error fetching hero section:", error);
// // //       });
// // //   }, []);

// // //   if (!blog) return ;

// // //   return (
// // //     <section className="section_blog uhm">
// // //       <div className="padding-global padding-0" style={{ marginTop: "100px" }}>
// // //         <div className="container-large">
// // //           <div className="blog_wrapper">
// // //             <div className="blog_featured-wrapper">
// // //               <FadeInOnScroll>
// // //                 <div className="about-us_text-dot-wrap">
// // //                   <div
// // //                     className="about-us_heading-dot"
// // //                     // style="background-color: #ff6b35 !important"
// // //                     style={{ backgroundColor: "#ff6b35" }}
// // //                   ></div>
// // //                   <div className="about-us_heading">FEATURED BLOG</div>
// // //                 </div>
// // //               </FadeInOnScroll>
// // //               <FadeInOnScroll delay={0.2}>
// // //                 <div className="featured-collection-list-wrapper w-dyn-list">
// // //                   <div
// // //                     role="list"
// // //                     className="featured-collection-list w-dyn-items"
// // //                   >
// // //                     <div
// // //                       role="listitem"
// // //                       className="featured-collection-item w-dyn-item"
// // //                     >
// // //                       <Link
// // //                         href={`/blog/${blog[0].slug}`}
// // //                         className="blogs_linkblock featured w-inline-block"
// // //                         onClick={doReverse}
// // //                       >
// // //                         <div className="blogs_image-wrapper featured">
// // //                           <img
// // //                             src={blog[0].image}
// // //                             loading="lazy"
// // //                             alt=""
// // //                             className="blogs_main-image"
// // //                           />
// // //                         </div>
// // //                         <div className="blogs_content-wrap featured">
// // //                           <div className="blogs_middle-container-wrap">
// // //                             <div className="blogs_tag">{blog[0].tag}</div>
// // //                             <div className="blog_reading-time">
// // //                               {blog[0].min_read} mins read
// // //                             </div>
// // //                           </div>
// // //                           <h2 className="blog_title featured">
// // //                             {blog[0].title}
// // //                           </h2>
// // //                           <p className="blog_summary">{blog[0].description}</p>
// // //                           <div className="blog_author-wrap">
// // //                             <div className="blog_author-image-wrap">
// // //                               <img
// // //                                 src={blog[0].author.profile_picture}
// // //                                 loading="lazy"
// // //                                 alt=""
// // //                                 className="blog_author-image"
// // //                               />
// // //                             </div>
// // //                             <div className="blog_author-detail-wrap">
// // //                               <h3 className="blog_author-name featured">
// // //                                 {blog[0].author.name}
// // //                               </h3>
// // //                               <p className="blog_author-position">
// // //                                 {new Date(
// // //                                   blog[0].created_at
// // //                                 ).toLocaleDateString("en-US", {
// // //                                   year: "numeric",
// // //                                   month: "long",
// // //                                   day: "numeric",
// // //                                 })}
// // //                               </p>
// // //                             </div>
// // //                           </div>
// // //                         </div>
// // //                       </Link>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </FadeInOnScroll>
// // //             </div>
// // //             <div className="blog_featured-wrapper recent-blog">
// // //               <FadeInOnScroll delay={0.3}>
// // //                 <div className="about-us_text-dot-wrap recent-blog-header">
// // //                   <div
// // //                     className="about-us_heading-dot"
// // //                     // style="background-color: #ff6b35 !important"
// // //                     style={{ backgroundColor: "#ff6b35" }}
// // //                   ></div>
// // //                   <div className="about-us_heading">RECENT BLOGS</div>
// // //                 </div>
// // //               </FadeInOnScroll>
// // //               <div className="blogs_collection-list-wrapper w-dyn-list">
// // //                 <div role="list" className="blogs_collection-list w-dyn-items">
// // //                   {/* {blog.slice(1).map((item) => ( */}
// // //                   {blog.slice(1).map((item, index) => (
// // //                     <motion.div
// // //                       role="listitem"
// // //                       className="blogs_collection-item w-dyn-item"
// // //                       key={index}
// // //                       initial={{ opacity: 0 }}
// // //                       whileInView={{ opacity: 1 }}
// // //                       transition={{
// // //                         duration: 0.7,
// // //                         ease: "easeOut",
// // //                         delay: index * 0.2,
// // //                       }}
// // //                       viewport={{ once: true, amount: 0.2 }}
// // //                     >
// // //                       <Link
// // //                         href={`/blog/${item.slug}`}
// // //                         className="blogs_linkblock w-inline-block"
// // //                         onClick={doReverse}
// // //                       >
// // //                         <div className="blogs_image-wrapper">
// // //                           <img
// // //                             src={item.image}
// // //                             loading="lazy"
// // //                             alt=""
// // //                             className="blogs_main-image"
// // //                           />
// // //                         </div>
// // //                         <div className="blogs_content-wrap">
// // //                           <div className="blogs_middle-container-wrap">
// // //                             <div className="blogs_tag">{item.tag}</div>
// // //                             <div className="blog_reading-time">
// // //                               {item.min_read} mins read
// // //                             </div>
// // //                           </div>
// // //                           <h3 className="blog_title">
// // //                             {/* Government incentives for solar */}
// // //                             {item.title}
// // //                           </h3>
// // //                           <p className="blog_summary">
// // //                             {item.description}
// // //                             {/* Take advantage of grants, tax credits, and rebates
// // //                               to make your switch to solar more affordable. We
// // //                               break down the latest government incentives and
// // //                               how to qualify. */}
// // //                           </p>
// // //                           <div className="blog_author-wrap">
// // //                             <div className="blog_author-image-wrap">
// // //                               <img
// // //                                 src={item.author.profile_picture}
// // //                                 loading="lazy"
// // //                                 alt=""
// // //                                 className="blog_author-image"
// // //                               />
// // //                             </div>
// // //                             <div className="blog_author-detail-wrap">
// // //                               <h4 className="blog_author-name">
// // //                                 {item.author.name}
// // //                               </h4>
// // //                               <p className="blog_author-position">
// // //                                 {new Date(item.created_at).toLocaleDateString(
// // //                                   "en-US",
// // //                                   {
// // //                                     year: "numeric",
// // //                                     month: "long",
// // //                                     day: "numeric",
// // //                                   }
// // //                                 )}
// // //                               </p>
// // //                             </div>
// // //                           </div>
// // //                         </div>
// // //                       </Link>
// // //                     </motion.div>
// // //                   ))}
                 
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }


// // export default function BlogSection() {
// //   const setHideLoader = () => {}; // Mock function

// //   function doReverse(e) {
// //     e.preventDefault();
// //     setHideLoader(false);

// //     setTimeout(() => {
// //       setHideLoader(true);
// //     }, 4000);
// //   }

// //   // Demo data replacing the dynamic API data
// //   const blog = [
// //     {
// //       slug: "future-of-composite-materials",
// //       image:
// //         "https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// //       tag: "Technology",
// //       min_read: 5,
// //       title: "The Future of Composite Materials in Construction",
// //       description:
// //         "Explore how advanced composite materials are revolutionizing the construction industry with superior strength, durability, and sustainability.",
// //       author: {
// //         name: "John Anderson",
// //         profile_picture:
// //           "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
// //       },
// //       created_at: "2025-09-15T10:30:00Z",
// //     },
// //     {
// //       slug: "gfrp-vs-traditional-steel",
// //       image:
// //         "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// //       tag: "Comparison",
// //       min_read: 7,
// //       title: "GFRP vs Traditional Steel: A Comprehensive Analysis",
// //       description:
// //         "Discover the advantages of Glass Fiber Reinforced Polymer over traditional steel reinforcement in various construction applications.",
// //       author: {
// //         name: "Sarah Mitchell",
// //         profile_picture:
// //           "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
// //       },
// //       created_at: "2025-09-10T14:20:00Z",
// //     },
// //     {
// //       slug: "sustainable-building-practices",
// //       image:
// //         "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// //       tag: "Sustainability",
// //       min_read: 6,
// //       title: "Sustainable Building Practices with Modern Materials",
// //       description:
// //         "Learn how innovative materials are contributing to more sustainable and environmentally friendly construction practices worldwide.",
// //       author: {
// //         name: "Michael Chen",
// //         profile_picture:
// //           "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
// //       },
// //       created_at: "2025-09-05T09:15:00Z",
// //     },
// //     {
// //       slug: "corrosion-resistance-marine-structures",
// //       image:
// //         "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// //       tag: "Engineering",
// //       min_read: 8,
// //       title: "Corrosion Resistance in Marine Structures",
// //       description:
// //         "Understanding how composite materials provide superior corrosion resistance in harsh marine environments and coastal construction.",
// //       author: {
// //         name: "Emily Rodriguez",
// //         profile_picture:
// //           "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
// //       },
// //       created_at: "2025-08-28T16:45:00Z",
// //     },
// //   ];

// //   return (
// //     <section className="section_blog uhm">
// //       <div className="padding-global padding-0" style={{ marginTop: "100px" }}>
// //         <div className="container-large">
// //           <div className="blog_wrapper">
// //             <div className="blog_featured-wrapper">
// //               <div>
// //                 <div className="about-us_text-dot-wrap">
// //                   <div
// //                     className="about-us_heading-dot"
// //                     style={{ backgroundColor: "#ff6b35" }}
// //                   ></div>
// //                   <div className="about-us_heading">FEATURED BLOG</div>
// //                 </div>
// //               </div>
// //               <div>
// //                 <div className="featured-collection-list-wrapper w-dyn-list">
// //                   <div
// //                     role="list"
// //                     className="featured-collection-list w-dyn-items"
// //                   >
// //                     <div
// //                       role="listitem"
// //                       className="featured-collection-item w-dyn-item"
// //                     >
// //                       <a
// //                         href={`/blog/${blog[0].slug}`}
// //                         className="blogs_linkblock featured w-inline-block"
// //                         onClick={doReverse}
// //                       >
// //                         <div className="blogs_image-wrapper featured">
// //                           <img
// //                             src={blog[0].image}
// //                             loading="lazy"
// //                             alt=""
// //                             className="blogs_main-image"
// //                           />
// //                         </div>
// //                         <div className="blogs_content-wrap featured">
// //                           <div className="blogs_middle-container-wrap">
// //                             <div className="blogs_tag">{blog[0].tag}</div>
// //                             <div className="blog_reading-time">
// //                               {blog[0].min_read} mins read
// //                             </div>
// //                           </div>
// //                           <h2 className="blog_title featured">
// //                             {blog[0].title}
// //                           </h2>
// //                           <p className="blog_summary">{blog[0].description}</p>
// //                           <div className="blog_author-wrap">
// //                             <div className="blog_author-image-wrap">
// //                               <img
// //                                 src={blog[0].author.profile_picture}
// //                                 loading="lazy"
// //                                 alt=""
// //                                 className="blog_author-image"
// //                               />
// //                             </div>
// //                             <div className="blog_author-detail-wrap">
// //                               <h3 className="blog_author-name featured">
// //                                 {blog[0].author.name}
// //                               </h3>
// //                               <p className="blog_author-position">
// //                                 {new Date(
// //                                   blog[0].created_at
// //                                 ).toLocaleDateString("en-US", {
// //                                   year: "numeric",
// //                                   month: "long",
// //                                   day: "numeric",
// //                                 })}
// //                               </p>
// //                             </div>
// //                           </div>
// //                         </div>
// //                       </a>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="blog_featured-wrapper recent-blog">
// //               <div>
// //                 <div className="about-us_text-dot-wrap recent-blog-header">
// //                   <div
// //                     className="about-us_heading-dot"
// //                     style={{ backgroundColor: "#ff6b35" }}
// //                   ></div>
// //                   <div className="about-us_heading">RECENT BLOGS</div>
// //                 </div>
// //               </div>
// //               <div className="blogs_collection-list-wrapper w-dyn-list">
// //                 <div role="list" className="blogs_collection-list w-dyn-items">
// //                   {blog.slice(1).map((item, index) => (
// //                     <div
// //                       role="listitem"
// //                       className="blogs_collection-item w-dyn-item"
// //                       key={index}
// //                     >
// //                       <a
// //                         href={`/blog/${item.slug}`}
// //                         className="blogs_linkblock w-inline-block"
// //                         onClick={doReverse}
// //                       >
// //                         <div className="blogs_image-wrapper">
// //                           <img
// //                             src={item.image}
// //                             loading="lazy"
// //                             alt=""
// //                             className="blogs_main-image"
// //                           />
// //                         </div>
// //                         <div className="blogs_content-wrap">
// //                           <div className="blogs_middle-container-wrap">
// //                             <div className="blogs_tag">{item.tag}</div>
// //                             <div className="blog_reading-time">
// //                               {item.min_read} mins read
// //                             </div>
// //                           </div>
// //                           <h3 className="blog_title">{item.title}</h3>
// //                           <p className="blog_summary">{item.description}</p>
// //                           <div className="blog_author-wrap">
// //                             <div className="blog_author-image-wrap">
// //                               <img
// //                                 src={item.author.profile_picture}
// //                                 loading="lazy"
// //                                 alt=""
// //                                 className="blog_author-image"
// //                               />
// //                             </div>
// //                             <div className="blog_author-detail-wrap">
// //                               <h4 className="blog_author-name">
// //                                 {item.author.name}
// //                               </h4>
// //                               <p className="blog_author-position">
// //                                 {new Date(item.created_at).toLocaleDateString(
// //                                   "en-US",
// //                                   {
// //                                     year: "numeric",
// //                                     month: "long",
// //                                     day: "numeric",
// //                                   }
// //                                 )}
// //                               </p>
// //                             </div>
// //                           </div>
// //                         </div>
// //                       </a>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import { getImageUrl } from "@/lib/blog"; // Adjust path as needed

// interface BlogSectionProps {
//   allBlogs: any[];
//   featuredBlog: any;
// }

// export default function BlogSection({ allBlogs, featuredBlog }: BlogSectionProps) {
//   const setHideLoader = () => {}; // Mock function

//   function doReverse(e) {
//     e.preventDefault();
//     setHideLoader(false);

//     setTimeout(() => {
//       setHideLoader(true);
//     }, 4000);
//   }

//   // Fetch blogs from Payload
//   // const allBlogss = allBlogs.filter((b) => b.id !== featured?.id).slice(0, 3);
//   // const featuredBlogs = featuredBlog || allBlogs[0];
//   // // Use featured blog if available, otherwise use first blog
//   // const featured = featuredBlog || allBlogs[0];

//   // // Get recent blogs (excluding featured)
//   // const recentBlogs = allBlogss
//   //   .filter((b: any) => b.id !== featured?.id)
//   //   .slice(0, 3);

//   // if (!featured) {
//   //   return null; // or return a placeholder
//   // }

//   const featured = featuredBlog || allBlogs[0];

//   // ✅ Then compute recent blogs
//   const recentBlogs = allBlogs
//     .filter((b: any) => b.id !== featured?.id)
//     .slice(0, 3);

//   if (!featured) return null;

//   return (
//     // <section className="section_blog uhm">
//     //   <div className="padding-global padding-0" style={{ marginTop: "100px" }}>
//     //     <div className="container-large">
//     //       <div className="blog_wrapper">
//     //         <div className="blog_featured-wrapper">
//     //           <div>
//     //             <div className="about-us_text-dot-wrap">
//     //               <div
//     //                 className="about-us_heading-dot"
//     //                 style={{ backgroundColor: "#ff6b35" }}
//     //               ></div>
//     //               <div className="about-us_heading">FEATURED BLOG</div>
//     //             </div>
//     //           </div>
//     //           <div>
//     //             <div className="featured-collection-list-wrapper w-dyn-list">
//     //               <div
//     //                 role="list"
//     //                 className="featured-collection-list w-dyn-items"
//     //               >
//     //                 <div
//     //                   role="listitem"
//     //                   className="featured-collection-item w-dyn-item"
//     //                 >
//     //                   <a
//     //                     href={`/blog/${featured.slug}`}
//     //                     className="blogs_linkblock featured w-inline-block"
//     //                     onClick={doReverse}
//     //                   >
//     //                     <div className="blogs_image-wrapper featured">
//     //                       <img
//     //                         src={getImageUrl(featured.image)}
//     //                         loading="lazy"
//     //                         alt={featured.title}
//     //                         className="blogs_main-image"
//     //                       />
//     //                     </div>
//     //                     <div className="blogs_content-wrap featured">
//     //                       <div className="blogs_middle-container-wrap">
//     //                         <div className="blogs_tag">{featured.tag}</div>
//     //                         <div className="blog_reading-time">
//     //                           {featured.min_read} mins read
//     //                         </div>
//     //                       </div>
//     //                       <h2 className="blog_title featured">
//     //                         {featured.title}
//     //                       </h2>
//     //                       <p className="blog_summary">{featured.description}</p>
//     //                       <div className="blog_author-wrap">
//     //                         <div className="blog_author-image-wrap">
//     //                           <img
//     //                             src={getImageUrl(
//     //                               featured.author.profile_picture
//     //                             )}
//     //                             loading="lazy"
//     //                             alt={featured.author.name}
//     //                             className="blog_author-image"
//     //                           />
//     //                         </div>
//     //                         <div className="blog_author-detail-wrap">
//     //                           <h3 className="blog_author-name featured">
//     //                             {featured.author.name}
//     //                           </h3>
//     //                           <p className="blog_author-position">
//     //                             {new Date(
//     //                               featured.created_at
//     //                             ).toLocaleDateString("en-US", {
//     //                               year: "numeric",
//     //                               month: "long",
//     //                               day: "numeric",
//     //                             })}
//     //                           </p>
//     //                         </div>
//     //                       </div>
//     //                     </div>
//     //                   </a>
//     //                 </div>
//     //               </div>
//     //             </div>
//     //           </div>
//     //         </div>
//     //         <div className="blog_featured-wrapper recent-blog">
//     //           <div>
//     //             <div className="about-us_text-dot-wrap recent-blog-header">
//     //               <div
//     //                 className="about-us_heading-dot"
//     //                 style={{ backgroundColor: "#ff6b35" }}
//     //               ></div>
//     //               <div className="about-us_heading">RECENT BLOGS</div>
//     //             </div>
//     //           </div>
//     //           <div className="blogs_collection-list-wrapper w-dyn-list">
//     //             <div role="list" className="blogs_collection-list w-dyn-items">
//     //               {recentBlogs.map((item: any, index: number) => (
//     //                 <div
//     //                   role="listitem"
//     //                   className="blogs_collection-item w-dyn-item"
//     //                   key={item.id || index}
//     //                 >
//     //                   <a
//     //                     href={`/blog/${item.slug}`}
//     //                     className="blogs_linkblock w-inline-block"
//     //                     onClick={doReverse}
//     //                   >
//     //                     <div className="blogs_image-wrapper">
//     //                       <img
//     //                         src={getImageUrl(item.image)}
//     //                         loading="lazy"
//     //                         alt={item.title}
//     //                         className="blogs_main-image"
//     //                       />
//     //                     </div>
//     //                     <div className="blogs_content-wrap">
//     //                       <div className="blogs_middle-container-wrap">
//     //                         <div className="blogs_tag">{item.tag}</div>
//     //                         <div className="blog_reading-time">
//     //                           {item.min_read} mins read
//     //                         </div>
//     //                       </div>
//     //                       <h3 className="blog_title">{item.title}</h3>
//     //                       <p className="blog_summary">{item.description}</p>
//     //                       <div className="blog_author-wrap">
//     //                         <div className="blog_author-image-wrap">
//     //                           <img
//     //                             src={getImageUrl(item.author.profile_picture)}
//     //                             loading="lazy"
//     //                             alt={item.author.name}
//     //                             className="blog_author-image"
//     //                           />
//     //                         </div>
//     //                         <div className="blog_author-detail-wrap">
//     //                           <h4 className="blog_author-name">
//     //                             {item.author.name}
//     //                           </h4>
//     //                           <p className="blog_author-position">
//     //                             {new Date(item.created_at).toLocaleDateString(
//     //                               "en-US",
//     //                               {
//     //                                 year: "numeric",
//     //                                 month: "long",
//     //                                 day: "numeric",
//     //                               }
//     //                             )}
//     //                           </p>
//     //                         </div>
//     //                       </div>
//     //                     </div>
//     //                   </a>
//     //                 </div>
//     //               ))}
//     //             </div>
//     //           </div>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </section>

//     <section className="section_blog uhm">
//       <div className="padding-global padding-0" style={{ marginTop: "100px" }}>
//         <div className="container-large">
//           <div className="blog_wrapper">
//             {/* FEATURED BLOG */}
//             <div className="blog_featured-wrapper">
//               <div className="about-us_text-dot-wrap">
//                 <div
//                   className="about-us_heading-dot"
//                   style={{ backgroundColor: "#ff6b35" }}
//                 ></div>
//                 <div className="about-us_heading">FEATURED BLOG</div>
//               </div>

//               <div className="featured-collection-list-wrapper w-dyn-list">
//                 <div
//                   role="list"
//                   className="featured-collection-list w-dyn-items"
//                 >
//                   <div
//                     role="listitem"
//                     className="featured-collection-item w-dyn-item"
//                   >
//                     <a
//                       href={`/blog/${featured.slug}`}
//                       className="blogs_linkblock featured w-inline-block"
//                       onClick={doReverse}
//                     >
//                       <div className="blogs_image-wrapper featured">
//                         <img
//                           src={getImageUrl(featured.image)}
//                           loading="lazy"
//                           alt={featured.title}
//                           className="blogs_main-image"
//                         />
//                       </div>
//                       <div className="blogs_content-wrap featured">
//                         <div className="blogs_middle-container-wrap">
//                           <div className="blogs_tag">{featured.tag}</div>
//                           <div className="blog_reading-time">
//                             {featured.min_read} mins read
//                           </div>
//                         </div>
//                         <h2 className="blog_title featured">
//                           {featured.title}
//                         </h2>
//                         <p className="blog_summary">{featured.description}</p>
//                         <div className="blog_author-wrap">
//                           <div className="blog_author-image-wrap">
//                             <img
//                               src={getImageUrl(featured.author.profile_picture)}
//                               loading="lazy"
//                               alt={featured.author.name}
//                               className="blog_author-image"
//                             />
//                           </div>
//                           <div className="blog_author-detail-wrap">
//                             <h3 className="blog_author-name featured">
//                               {featured.author.name}
//                             </h3>
//                             <p className="blog_author-position">
//                               {new Date(featured.created_at).toLocaleDateString(
//                                 "en-US",
//                                 {
//                                   year: "numeric",
//                                   month: "long",
//                                   day: "numeric",
//                                 }
//                               )}
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* RECENT BLOGS */}
//             <div className="blog_featured-wrapper recent-blog">
//               <div className="about-us_text-dot-wrap recent-blog-header">
//                 <div
//                   className="about-us_heading-dot"
//                   style={{ backgroundColor: "#ff6b35" }}
//                 ></div>
//                 <div className="about-us_heading">RECENT BLOGS</div>
//               </div>

//               <div className="blogs_collection-list-wrapper w-dyn-list">
//                 <div role="list" className="blogs_collection-list w-dyn-items">
//                   {recentBlogs.map((item: any, index: number) => (
//                     <div
//                       role="listitem"
//                       className="blogs_collection-item w-dyn-item"
//                       key={item.id || index}
//                     >
//                       <a
//                         href={`/blog/${item.slug}`}
//                         className="blogs_linkblock w-inline-block"
//                         onClick={doReverse}
//                       >
//                         <div className="blogs_image-wrapper">
//                           <img
//                             src={getImageUrl(item.image)}
//                             loading="lazy"
//                             alt={item.title}
//                             className="blogs_main-image"
//                           />
//                         </div>
//                         <div className="blogs_content-wrap">
//                           <div className="blogs_middle-container-wrap">
//                             <div className="blogs_tag">{item.tag}</div>
//                             <div className="blog_reading-time">
//                               {item.min_read} mins read
//                             </div>
//                           </div>
//                           <h3 className="blog_title">{item.title}</h3>
//                           <p className="blog_summary">{item.description}</p>
//                           <div className="blog_author-wrap">
//                             <div className="blog_author-image-wrap">
//                               <img
//                                 src={getImageUrl(item.author.profile_picture)}
//                                 loading="lazy"
//                                 alt={item.author.name}
//                                 className="blog_author-image"
//                               />
//                             </div>
//                             <div className="blog_author-detail-wrap">
//                               <h4 className="blog_author-name">
//                                 {item.author.name}
//                               </h4>
//                               <p className="blog_author-position">
//                                 {new Date(item.created_at).toLocaleDateString(
//                                   "en-US",
//                                   {
//                                     year: "numeric",
//                                     month: "long",
//                                     day: "numeric",
//                                   }
//                                 )}
//                               </p>
//                             </div>
//                           </div>
//                         </div>
//                       </a>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import Link from "next/link"; // Add this import
import { getImageUrl } from "@/lib/blog";

interface BlogSectionProps {
  allBlogs: any[];
  featuredBlog: any;
}

export default function BlogSection({
  allBlogs,
  featuredBlog,
}: BlogSectionProps) {
  const setHideLoader = () => {};

  function doReverse(e) {
    e.preventDefault();
    setHideLoader(false);

    setTimeout(() => {
      setHideLoader(true);
    }, 4000);
  }

  const featured = featuredBlog || allBlogs[0];
  const recentBlogs = allBlogs
    .filter((b: any) => b.id !== featured?.id)
    // .slice(0, 3);

  if (!featured) return null;

  return (
    <section className="section_blog uhm">
      <div className="padding-global padding-0" style={{ marginTop: "100px" }}>
        <div className="container-large">
          <div className="blog_wrapper">
            {/* FEATURED BLOG */}
            <div className="blog_featured-wrapper">
              <div className="about-us_text-dot-wrap">
                <div
                  className="about-us_heading-dot"
                  style={{ backgroundColor: "#ff6b35" }}
                ></div>
                <div className="about-us_heading">FEATURED BLOG</div>
              </div>

              <div className="featured-collection-list-wrapper w-dyn-list">
                <div
                  role="list"
                  className="featured-collection-list w-dyn-items"
                >
                  <div
                    role="listitem"
                    className="featured-collection-item w-dyn-item"
                  >
                    <Link
                      href={`/blog/${featured.slug}`}
                      className="blogs_linkblock featured w-inline-block"
                    >
                      <div className="blogs_image-wrapper featured">
                        <img
                          src={getImageUrl(featured.image)}
                          loading="lazy"
                          alt={featured.title}
                          className="blogs_main-image"
                        />
                      </div>
                      <div className="blogs_content-wrap featured">
                        <div className="blogs_middle-container-wrap">
                          <div className="blogs_tag">{featured.tag}</div>
                          <div className="blog_reading-time">
                            {featured.min_read} mins read
                          </div>
                        </div>
                        <h2 className="blog_title featured">
                          {featured.title}
                        </h2>
                        <p className="blog_summary">{featured.description}</p>
                        <div className="blog_author-wrap">
                          <div className="blog_author-image-wrap">
                            <img
                              src={getImageUrl(featured.author.profile_picture)}
                              loading="lazy"
                              alt={featured.author.name}
                              className="blog_author-image"
                            />
                          </div>
                          <div className="blog_author-detail-wrap">
                            <h3 className="blog_author-name featured">
                              {featured.author.name}
                            </h3>
                            <p className="blog_author-position">
                              {new Date(featured.created_at).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                }
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* RECENT BLOGS */}
            <div className="blog_featured-wrapper recent-blog">
              <div className="about-us_text-dot-wrap recent-blog-header">
                <div
                  className="about-us_heading-dot"
                  style={{ backgroundColor: "#ff6b35" }}
                ></div>
                <div className="about-us_heading">RECENT BLOGS</div>
              </div>

              <div className="blogs_collection-list-wrapper w-dyn-list">
                <div role="list" className="blogs_collection-list w-dyn-items">
                  {recentBlogs.map((item: any, index: number) => (
                    <div
                      role="listitem"
                      className="blogs_collection-item w-dyn-item"
                      key={item.id || index}
                    >
                      <Link
                        href={`/blog/${item.slug}`}
                        className="blogs_linkblock w-inline-block"
                      >
                        <div className="blogs_image-wrapper">
                          <img
                            src={getImageUrl(item.image)}
                            loading="lazy"
                            alt={item.title}
                            className="blogs_main-image"
                          />
                        </div>
                        <div className="blogs_content-wrap">
                          <div className="blogs_middle-container-wrap">
                            <div className="blogs_tag">{item.tag}</div>
                            <div className="blog_reading-time">
                              {item.min_read} mins read
                            </div>
                          </div>
                          <h3 className="blog_title">{item.title}</h3>
                          <p className="blog_summary">{item.description}</p>
                          <div className="blog_author-wrap">
                            <div className="blog_author-image-wrap">
                              <img
                                src={getImageUrl(item.author.profile_picture)}
                                loading="lazy"
                                alt={item.author.name}
                                className="blog_author-image"
                              />
                            </div>
                            <div className="blog_author-detail-wrap">
                              <h4 className="blog_author-name">
                                {item.author.name}
                              </h4>
                              <p className="blog_author-position">
                                {new Date(item.created_at).toLocaleDateString(
                                  "en-US",
                                  {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  }
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}