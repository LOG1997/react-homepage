import React from "react";
const config_data = [
    {
        name: "庾友",
        imgUrl: "https://song.gushiwen.cn/authorImg/wangxizhi.jpg",
    },
    {
        name: "华茂",
        imgUrl: "https://song.gushiwen.cn/authorImg/wangxizhi.jpg",
    },
    {
        name: "魏滂",
        imgUrl: "https://song.gushiwen.cn/authorImg/wangxizhi.jpg",
    },
    {
        name: "曹茂之",
        imgUrl: "https://song.gushiwen.cn/authorImg/wangxizhi.jpg",
    },
    {
        name: "华平",
        imgUrl: "https://song.gushiwen.cn/authorImg/wangxizhi.jpg",
    },
    {
        name: "桓伟",
        imgUrl: "https://song.gushiwen.cn/authorImg/wangxizhi.jpg",
    },
    {
        name: "王玄之",
        imgUrl: "https://song.gushiwen.cn/authorImg/wangxizhi.jpg",
    },
    {
        name: "王蕴之",
        imgUrl: "https://song.gushiwen.cn/authorImg/wangxizhi.jpg",
    },
    {
        name: "王焕之",
        imgUrl: "https://song.gushiwen.cn/authorImg/wangxizhi.jpg",
    },
    {
        name: "谢瑰",
        imgUrl: "https://song.gushiwen.cn/authorImg/wangxizhi.jpg",
    },
    {
        name: "卞迪",
        imgUrl: "https://song.gushiwen.cn/authorImg/wangxizhi.jpg",
    },
    {
        name: "王献之",
        imgUrl: "https://song.gushiwen.cn/authorImg/wangxizhi.jpg",
    },
    {
        name: "丘髦",
        imgUrl: "https://song.gushiwen.cn/authorImg/wangxizhi.jpg",
    },
    {
        name: "羊模",
        imgUrl: "https://song.gushiwen.cn/authorImg/wangxizhi.jpg",
    },
    {
        name: "孔炽",
        imgUrl: "https://song.gushiwen.cn/authorImg/wangxizhi.jpg",
    },
    {
        name: "刘密",
        imgUrl: "https://song.gushiwen.cn/authorImg/wangxizhi.jpg",
    },
    {
        name: "虞谷",
        imgUrl: "https://song.gushiwen.cn/authorImg/wangxizhi.jpg",
    },
    {
        name: "劳夷",
        imgUrl: "https://song.gushiwen.cn/authorImg/wangxizhi.jpg",
    },
    {
        name: "后绵",
        imgUrl: "https://song.gushiwen.cn/authorImg/wangxizhi.jpg",
    },
    {
        name: "华耆",
        imgUrl: "https://song.gushiwen.cn/authorImg/wangxizhi.jpg",
    }, {
        name: "曹礼",
        imgUrl: "https://song.gushiwen.cn/authorImg/wangxizhi.jpg",
    },
];
export default function TopSection() {
    return (
        <div>
            <div className="flex justify-center">
                {config_data.map((item, index) => {
                    console.log("😆item:", item);
                    return (
                        <div
                            key={index}
                            className="flex w-52 h-20 text-xl border-1 mx-4 rounded-xl items-center"
                        >
                            <div className="imgHead w-12 h-12 mr-12">
                                <img className="h-12 bg-cover" src={item.imgUrl} alt="头像" />
                            </div>
                            <div>{item.name}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
