import React from "react";
const config_data = [
    {
        name: "王羲之",
        imgUrl: "https://song.gushiwen.cn/authorImg/wangxizhi.jpg",
    },
    {
        name: "王彬之",
        imgUrl: "https://song.gushiwen.cn/authorImg/wangxizhi.jpg",
    },
    {
        name: "王凝之",
        imgUrl: "https://song.gushiwen.cn/authorImg/wangxizhi.jpg",
    },
    {
        name: "王丰之",
        imgUrl: "https://song.gushiwen.cn/authorImg/wangxizhi.jpg",
    },
    {
        name: "王肃之",
        imgUrl: "https://song.gushiwen.cn/authorImg/wangxizhi.jpg",
    },
    {
        name: "王微之",
        imgUrl: "https://song.gushiwen.cn/authorImg/wangxizhi.jpg",
    },
    {
        name: "谢安",
        imgUrl: "https://song.gushiwen.cn/authorImg/wangxizhi.jpg",
    },
    {
        name: "谢万",
        imgUrl: "https://song.gushiwen.cn/authorImg/wangxizhi.jpg",
    },
    {
        name: "谢绎",
        imgUrl: "https://song.gushiwen.cn/authorImg/wangxizhi.jpg",
    },
    {
        name: "袁峤之",
        imgUrl: "https://song.gushiwen.cn/authorImg/wangxizhi.jpg",
    },
    {
        name: "孙绰",
        imgUrl: "https://song.gushiwen.cn/authorImg/wangxizhi.jpg",
    },
    {
        name: "孙统",
        imgUrl: "https://song.gushiwen.cn/authorImg/wangxizhi.jpg",
    },
    {
        name: "孙嗣",
        imgUrl: "https://song.gushiwen.cn/authorImg/wangxizhi.jpg",
    },
    {
        name: "徐丰之",
        imgUrl: "https://song.gushiwen.cn/authorImg/wangxizhi.jpg",
    },
    {
        name: "郗昙",
        imgUrl: "https://song.gushiwen.cn/authorImg/wangxizhi.jpg",
    },
    {
        name: "庾蕴",
        imgUrl: "https://song.gushiwen.cn/authorImg/wangxizhi.jpg",
    }, {
        name: "谢藤",
        imgUrl: "https://song.gushiwen.cn/authorImg/wangxizhi.jpg",
    }, {
        name: "任儗",
        imgUrl: "https://song.gushiwen.cn/authorImg/wangxizhi.jpg",
    }, {
        name: "吕系",
        imgUrl: "https://song.gushiwen.cn/authorImg/wangxizhi.jpg",
    }, {
        name: "吕本",
        imgUrl: "https://song.gushiwen.cn/authorImg/wangxizhi.jpg",
    },
];
export default function BottomSection() {
    return (
        <div>
            <div className="flex justify-center">
                {config_data.map((item, index) => {
                    console.log("😆item:", item);
                    return (
                        <div
                            key={index}
                            className="flex w-52 h-20 text-xl border-1 mx-4 rounded-xl items-center hover:bg-red-300"
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
