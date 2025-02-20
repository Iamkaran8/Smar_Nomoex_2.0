import img_1 from "../../assets/Dummy_images/blogimg-2.png";
import img_2 from "../../assets/Dummy_images/blogimg-3.png";
import img_3 from "../../assets/Dummy_images/blogimg-2.png";

export const TopStories = () => {
  const articles = [
    {
      category: "How-to Guides",
      title: "A Complete Guide to Making Passive Income With Lending?",
      description:
        "Chart of the to the MetaverseTrading volume for Metaverse tokens skyrocketed by a whopping 153% ",
      posted_by: "Brijanohan Mallick",
      date: "01 Feb 22",
      difficulty: "Easy",
      image: img_1,
    },
    {
      category: "How-to Guides",
      title: "The Ultimate Dummy’s Guide to Passive Income with Staking?",
      description:
        "Miami Mayor Francis Suarez said he’s still taking his city salary in Bitcoin even after a rout that sent the cryptocurrency",
      posted_by: "Praskovya Dubinina",
      date: "23 Mar 22",
      difficulty: "Experienced",
      image: img_2,
    },
    {
      category: "How-to Guides",
      title: "Miami Mayor Suarez Tells Davos He Still Takes Salary in Bitcoin?",
      description:
        "Japanese investment bank Nomura is launching a subsidiary to give institutions access to digital assets, report in the FT",
      posted_by: "Homura Yunosuke",
      date: "19 Jun 22",
      difficulty: "Easy",
      image: img_3,
    },
  ];

  return (
    <>
      <div className="border-[1px] border-Soft_Gray rounded-[8px] dark:border-Soft_Gray_20">
        <div className="border-b-[1px] border-Soft_Gray p-5 dark:border-Soft_Gray_20">
          <h3 className="text-[16x]">Top Stories</h3>
        </div>
        {articles.map((blog, i) => (
          <div className="px-5 " key={i}>
            <div className="flex flex-col  gap-5 py-5 md:flex-row">
              <div className=" lg:w-[20%]  md:w-[35%] flex items-center">
                <img
                  className="rounded-[12px] w-[100%] h-[100%]"
                  src={blog.image}
                  alt={blog.category}
                />
              </div>
              <div className=" w-[100%]  lg:w-[80%] md:w-[65%] flex flex-col gap-2">
                <div className="flex gap-3">
                  <p className="text-[12px] text-Slate_Gray font-normal">
                    {blog.date}
                  </p>
                  <p className="text-[12px] font-medium">{blog.category}</p>
                </div>
                <h3 className="text-[16px] leading-[24px] font-bold w-[100%] md:w-[100%] lg:w-[80%]">
                  {blog.title}
                </h3>
                <p className="text-[14px] w-[100%] md:w-[100%] lg:w-[80%] text-Slate_Gray leading-[21px] font-normal">
                  {blog.description}
                </p>
              </div>
            </div>
            {i === articles.length - 1 ? "" : <hr className="dark:border-Soft_Gray_20" />}
          </div>
        ))}
      </div>
    </>
  );
};
