import { BlurFade } from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
export const metadata = {
  title: "Portfolio",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const galleryPhotos = [
    ["https://res.cloudinary.com/dnxjsbzse/image/upload/v1738084536/mhwgoxvzozwtcfvgilpa.jpg", 
      "https://res.cloudinary.com/dnxjsbzse/image/upload/v1738084534/smgltshudy7agktekaux.jpg","https://res.cloudinary.com/dnxjsbzse/image/upload/v1738085608/11_q6891q.jpg"],
     ["https://res.cloudinary.com/dnxjsbzse/image/upload/v1738084533/bsn5abtjsvaxxgbwy3l2.jpg", 
      "https://res.cloudinary.com/dnxjsbzse/image/upload/v1738084531/rjk5qgr0eb9rkytjnc1a.jpg","https://res.cloudinary.com/dnxjsbzse/image/upload/v1738085614/12_uwu5tb.jpg"],
      ["https://res.cloudinary.com/dnxjsbzse/image/upload/v1738084810/adidas-03_x2j8gw.jpg", 
       "https://res.cloudinary.com/dnxjsbzse/image/upload/v1738084531/rjk5qgr0eb9rkytjnc1a.jpg","https://res.cloudinary.com/dnxjsbzse/image/upload/v1738086010/giliw_brvdb9.jpg"],
       ["https://res.cloudinary.com/dnxjsbzse/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1738084812/test-03_b302xo.jpg","https://res.cloudinary.com/dnxjsbzse/image/upload/v1738086052/200_q6sgpd.jpg ","https://res.cloudinary.com/dnxjsbzse/image/upload/v1738086052/200_q6sgpd.jpg"],
       [
        "https://res.cloudinary.com/dnxjsbzse/image/upload/v1738086242/7_xqp5xw.png","https://res.cloudinary.com/dnxjsbzse/image/upload/v1738086261/orange-floating_u6msdu.png","https://res.cloudinary.com/dnxjsbzse/image/upload/v1738086279/complete-orange_avo9ez.png"
       ],  [
        "https://res.cloudinary.com/dnxjsbzse/image/upload/v1738086237/01_Free_Floating_iPhone_15_Pro_Mockup_With_Rope_ha1tqj.png","https://res.cloudinary.com/dnxjsbzse/image/upload/v1738086428/6_kvhbzd.png","https://res.cloudinary.com/dnxjsbzse/image/upload/v1738086443/ey_inl9o9.png"
       ],  [
        "https://res.cloudinary.com/dnxjsbzse/image/upload/v1738086535/2_vm5odb.png","https://res.cloudinary.com/dnxjsbzse/image/upload/v1738086536/4_uosd5h.png","https://res.cloudinary.com/dnxjsbzse/image/upload/v1738086536/1_rwlqmm.png"
       ]
       ,  [
        "https://res.cloudinary.com/dnxjsbzse/image/upload/v1738086678/5_akhvbz.png","https://res.cloudinary.com/dnxjsbzse/image/upload/v1738086538/3_xdaile.png","https://res.cloudinary.com/dnxjsbzse/image/upload/v1738086572/multi_yk9rsd.png"
       ] ,  [
        "https://res.cloudinary.com/dnxjsbzse/image/upload/v1738086678/5_akhvbz.png","https://res.cloudinary.com/dnxjsbzse/image/upload/v1738086538/3_xdaile.png","https://res.cloudinary.com/dnxjsbzse/image/upload/v1738086572/multi_yk9rsd.png"
       ],  [
        "https://res.cloudinary.com/dnxjsbzse/image/upload/v1738087186/infographics-03_rebyel.jpg","https://res.cloudinary.com/dnxjsbzse/image/upload/v1738087188/infographics-01_c18iqr.jpg" ,"https://res.cloudinary.com/dnxjsbzse/image/upload/v1738087191/infographics-02_ymi946.jpg"
       ]
       
     
  ];

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">Visual Marketing Design</h1>
      </BlurFade>
      <VelocityScroll>Visual Marketing Design </VelocityScroll>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <tbody>
            {galleryPhotos.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((imgUrl, colIndex) => (
                  <td key={colIndex} className="p-2">
                    <div className="relative">
                      <img
                        src={imgUrl}
                        alt="Gallery"
                        className="w-full h-auto transition duration-500 transform hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black opacity-0 transition duration-500 hover:opacity-50"></div>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
