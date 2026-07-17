// 本文件由 LSBlogs 在线管理端自动生成，请勿手动修改
export interface Photo { url: string; caption?: string; }
export interface Album { id: string; title: string; description: string; cover: string; date: string; photos: Photo[]; }

export const albums: Album[] = [
  {
    "title": "足迹",
    "description": "一段承载岁月的图集",
    "cover": "https://obsidian-image-bed-1379524953.cos.ap-guangzhou.myqcloud.com/Obsidian/a33eb4990c4e363d517d7387142bb23d.jpg",
    "id": "album_1784268681071",
    "photos": [
      {
        "url": "https://obsidian-image-bed-1379524953.cos.ap-guangzhou.myqcloud.com/Obsidian/a33eb4990c4e363d517d7387142bb23d.jpg",
        "caption": "华南农业大学湿地公园"
      }
    ],
    "date": "2026-07-17"
  },
  {
    "id": "anime-collection",
    "title": "次元收藏",
    "description": "喜欢的角色、场景与想象力切片。",
    "cover": "/images/backgrounds/bg-01-columbina.webp",
    "date": "2026.07",
    "photos": [
      {
        "url": "/images/backgrounds/bg-01-columbina.webp",
        "caption": "花影"
      },
      {
        "url": "/images/backgrounds/bg-02-reze.webp",
        "caption": "雨夜"
      },
      {
        "url": "/images/backgrounds/bg-03-scenery.webp",
        "caption": "远山"
      },
      {
        "url": "/images/backgrounds/bg-04-gargantua.webp",
        "caption": "星门"
      },
      {
        "url": "/images/backgrounds/bg-05-cat-girl.webp",
        "caption": "微光"
      },
      {
        "url": "/images/backgrounds/bg-06-zoro.webp",
        "caption": "剑意"
      },
      {
        "url": "/images/backgrounds/bg-07-naruto.webp",
        "caption": "风与火"
      },
      {
        "url": "/images/backgrounds/bg-08-tanjiro.webp",
        "caption": "焰色"
      },
      {
        "url": "/images/backgrounds/bg-09-gear-five.webp",
        "caption": "无拘"
      },
      {
        "url": "/images/backgrounds/bg-10-graffiti.webp",
        "caption": "涂鸦"
      }
    ]
  }
];
