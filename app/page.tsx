"use client";

import type { FormEvent } from "react";
import { useEffect, useState } from "react";

const environmentSlides = [
  {
    label: "接待等候区",
    title: "进门先放松，主人和宠物都有舒适位置。",
    description:
      "暖木、石材和柔和灯光营造安定感，等候区设置牵引挂点、饮水位和护理商品展示。",
    image: "/assets/environment/reception-lounge.png",
    alt: "高端宠物洗护店接待等候区，木质柜体、接待台和宠物友好休息区",
    tabTitle: "接待等候区",
    tabDescription: "主人沟通、宠物适应、护理前初检。",
  },
  {
    label: "透明洗护区",
    title: "玻璃分区和专业设备，让每一步都清楚可见。",
    description:
      "猫狗分区、独立洗护池和防滑护理台，让清洁流程更卫生，也减少宠物互相干扰。",
    image: "/assets/environment/wash-grooming.png",
    alt: "高端宠物洗护店透明洗护操作区，玻璃隔断、洗护池和专业吹水设备",
    tabTitle: "透明洗护区",
    tabDescription: "玻璃隔断、分区洗护、工具有序消毒。",
  },
  {
    label: "SPA 烘干护理区",
    title: "低应激烘干和皮毛护理，适合敏感宠物慢慢适应。",
    description:
      "独立烘干舱、柔和声学墙面和恒温护理设备，为胆小、年长或皮肤敏感的毛孩子预留安静空间。",
    image: "/assets/environment/spa-drying.png",
    alt: "高端宠物洗护店 SPA 烘干护理区，低应激烘干舱和安静护理空间",
    tabTitle: "SPA 烘干护理区",
    tabDescription: "恒温低噪、独立休息、皮毛养护。",
  },
];

function wrapSlideIndex(index: number) {
  return (index + environmentSlides.length) % environmentSlides.length;
}

export default function Home() {
  const [environmentIndex, setEnvironmentIndex] = useState(0);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    const timer = window.setInterval(() => {
      setEnvironmentIndex((currentIndex) => wrapSlideIndex(currentIndex + 1));
    }, 5200);

    return () => window.clearInterval(timer);
  }, [environmentIndex]);

  function handleBookingSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();

    setNotice(`${name}，预约信息已记录，我们会尽快与您确认时段。`);
    form.reset();
  }

  return (
    <>
      <header className="site-header">
        <nav className="nav" aria-label="主导航">
          <a className="brand" href="#">
            <span className="brand-mark" aria-hidden="true">
              爪
            </span>
            <span>沐爪宠物洗护</span>
          </a>
          <div className="nav-links">
            <a href="#services">服务</a>
            <a href="#environment">环境</a>
            <a href="#features">保障</a>
            <a href="#reviews">评价</a>
            <a href="#booking">预约</a>
          </div>
          <a className="btn btn-primary" href="#booking">
            立即预约
          </a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">低应激洗护 · 透明护理 · 按宠物性格服务</p>
            <h1>让每一次洗澡，都像一次轻松的小度假。</h1>
            <p>
              沐爪为猫咪和狗狗提供洗澡、护理、造型和皮毛养护服务。独立洗护间、恒温烘干、护理前沟通，给毛孩子更安心的体验。
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#booking">
                预约洗护
              </a>
              <a className="btn btn-soft" href="#services">
                查看套餐
              </a>
            </div>
            <div className="stats" aria-label="门店数据">
              <div className="stat">
                <strong>4.9</strong>
                <span>顾客综合评分</span>
              </div>
              <div className="stat">
                <strong>30min</strong>
                <span>到店健康初检</span>
              </div>
              <div className="stat">
                <strong>1v1</strong>
                <span>专属洗护师陪伴</span>
              </div>
            </div>
          </div>
          <div className="hero-photo" role="img" aria-label="正在等待洗护的小狗">
            <div className="hero-badge">
              <div className="badge-icon" aria-hidden="true">
                浴
              </div>
              <div>
                <strong>新客基础洗护 8.8 折</strong>
                <span>含耳道清洁、指甲修剪、脚底毛护理</span>
              </div>
            </div>
          </div>
        </section>

        <section className="services" id="services">
          <div className="section-inner">
            <div className="section-head">
              <h2>按毛孩子状态选择服务</h2>
              <p>从日常清洁到精细造型，洗护师会先观察皮肤、毛结和情绪，再给出合适方案。</p>
            </div>
            <div className="service-grid">
              <article className="card service-card">
                <div className="service-icon" aria-hidden="true">
                  泡
                </div>
                <h3>基础洁净洗护</h3>
                <p>适合日常清洁。包含沐浴、吹干、梳毛、耳眼清洁、脚底毛和指甲基础护理。</p>
                <div className="price">
                  <span>¥98 起</span>
                  <small>约 60-90 分钟</small>
                </div>
              </article>
              <article className="card service-card">
                <div className="service-icon" aria-hidden="true">
                  剪
                </div>
                <h3>精修造型护理</h3>
                <p>适合需要修型、去浮毛或开结的宠物。根据品种和主人偏好定制清爽造型。</p>
                <div className="price">
                  <span>¥168 起</span>
                  <small>约 90-150 分钟</small>
                </div>
              </article>
              <article className="card service-card">
                <div className="service-icon" aria-hidden="true">
                  护
                </div>
                <h3>皮毛养护 SPA</h3>
                <p>适合换毛季、毛发干燥或敏感肌。使用温和配方，搭配护理浴和低温烘干。</p>
                <div className="price">
                  <span>¥198 起</span>
                  <small>约 90-120 分钟</small>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="environment" id="environment">
          <div className="section-inner environment-shell">
            <div className="environment-carousel" aria-label="店内环境轮播图">
              <div
                className="environment-track"
                style={{ transform: `translateX(-${environmentIndex * 100}%)` }}
              >
                {environmentSlides.map((slide) => (
                  <article className="environment-slide" key={slide.label}>
                    <img src={slide.image} alt={slide.alt} />
                    <div className="slide-caption">
                      <span>{slide.label}</span>
                      <h3>{slide.title}</h3>
                      <p>{slide.description}</p>
                    </div>
                  </article>
                ))}
              </div>
              <div className="carousel-controls" aria-label="轮播控制">
                <button
                  className="icon-btn"
                  type="button"
                  aria-label="上一张"
                  onClick={() => setEnvironmentIndex((index) => wrapSlideIndex(index - 1))}
                >
                  ‹
                </button>
                <button
                  className="icon-btn"
                  type="button"
                  aria-label="下一张"
                  onClick={() => setEnvironmentIndex((index) => wrapSlideIndex(index + 1))}
                >
                  ›
                </button>
              </div>
            </div>
            <aside className="environment-panel" aria-label="店内环境说明">
              <div className="section-head">
                <h2>店内环境</h2>
                <p>
                  以中国城市高端宠物洗护店为参考，空间分为接待、洗护、SPA
                  烘干三类区域，兼顾质感、卫生和低应激体验。
                </p>
              </div>
              <div className="environment-tabs" role="tablist" aria-label="环境区域">
                {environmentSlides.map((slide, index) => (
                  <button
                    className={`environment-tab${index === environmentIndex ? " is-active" : ""}`}
                    type="button"
                    key={slide.tabTitle}
                    onClick={() => setEnvironmentIndex(index)}
                  >
                    <span className="tab-index">{String(index + 1).padStart(2, "0")}</span>
                    <span>
                      <strong>{slide.tabTitle}</strong>
                      <span>{slide.tabDescription}</span>
                    </span>
                  </button>
                ))}
              </div>
              <p className="environment-note">轮播图已使用 AI 按门店定位绘制，不再使用通用图库照片。</p>
            </aside>
          </div>
        </section>

        <section className="features" id="features">
          <div className="section-inner feature-layout">
            <div className="feature-photo" role="img" aria-label="宠物洗护店明亮的护理环境" />
            <div>
              <div className="section-head">
                <h2>看得见的干净，也照顾看不见的情绪</h2>
                <p>我们把流程拆得更细，让胆小、年纪大、第一次到店的宠物都能慢慢适应。</p>
              </div>
              <div className="feature-list">
                <article className="feature-item">
                  <span className="check" aria-hidden="true">
                    ✓
                  </span>
                  <div>
                    <h3>独立洗护空间</h3>
                    <p>猫狗分区，减少陌生气味和声音带来的紧张感。</p>
                  </div>
                </article>
                <article className="feature-item">
                  <span className="check" aria-hidden="true">
                    ✓
                  </span>
                  <div>
                    <h3>护理过程可沟通</h3>
                    <p>开结、修剪、皮肤异常会先说明，再继续操作。</p>
                  </div>
                </article>
                <article className="feature-item">
                  <span className="check" aria-hidden="true">
                    ✓
                  </span>
                  <div>
                    <h3>用品一客一消毒</h3>
                    <p>毛巾、梳具、台面按流程清洁，降低交叉接触风险。</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="reviews" id="reviews">
          <div className="section-inner">
            <div className="section-head">
              <h2>附近铲屎官的真实反馈</h2>
              <p>很多顾客第一次来只是想试试，后来就把固定洗护时间交给我们了。</p>
            </div>
            <div className="review-grid">
              <article className="card review-card">
                <div className="stars" aria-label="五星评价">
                  ★★★★★
                </div>
                <p>我家小比熊以前洗澡会发抖，这次洗完还愿意在店里转悠。造型也很自然，没有剪得太夸张。</p>
                <div className="reviewer">
                  <span className="avatar">米</span>
                  <span>米粒主人</span>
                </div>
              </article>
              <article className="card review-card">
                <div className="stars" aria-label="五星评价">
                  ★★★★★
                </div>
                <p>洗护师会先摸皮肤和毛结，猫咪紧张时也会停下来安抚。接回家的时候香味很淡，很舒服。</p>
                <div className="reviewer">
                  <span className="avatar">桃</span>
                  <span>桃子主人</span>
                </div>
              </article>
              <article className="card review-card">
                <div className="stars" aria-label="五星评价">
                  ★★★★★
                </div>
                <p>店里很明亮，流程也透明。最喜欢的是会提醒耳朵和脚垫的小问题，感觉真的有认真观察。</p>
                <div className="reviewer">
                  <span className="avatar">豆</span>
                  <span>豆包主人</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="booking" id="booking">
          <div className="section-inner booking-box">
            <div className="booking-info">
              <h2>给毛孩子留一个舒服的洗护时段</h2>
              <p>提交信息后，门店会根据宠物体型、毛量和服务项目确认预计时长与价格。</p>
              <div className="contact-list">
                <span>营业时间：周一至周日 10:00-20:00</span>
                <span>门店地址：上海市宜川路街道陕西北路1820号（近宜川生活广场）</span>
                <span>预约电话：021-8888-6620</span>
              </div>
              <figure className="location-map-card">
                <img
                  src="/assets/location/location-map.png"
                  alt="沐爪宠物洗护店位置地图，标注上海市宜川路街道陕西北路1820号，近宜川生活广场"
                />
                <figcaption className="map-caption">
                  <strong>沐爪宠物洗护 · 陕西北路1820号</strong>
                  <span>位于上海市宜川路街道，近宜川生活广场，建议到店前电话确认当日洗护时段。</span>
                </figcaption>
              </figure>
            </div>
            <form className="booking-form" onSubmit={handleBookingSubmit}>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="name">联系人</label>
                  <input id="name" name="name" type="text" placeholder="请输入姓名" required />
                </div>
                <div className="field">
                  <label htmlFor="phone">手机号</label>
                  <input id="phone" name="phone" type="tel" placeholder="请输入手机号" required />
                </div>
              </div>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="pet">宠物类型</label>
                  <select id="pet" name="pet" required defaultValue="">
                    <option value="">请选择</option>
                    <option>小型犬</option>
                    <option>中大型犬</option>
                    <option>猫咪</option>
                    <option>其他宠物</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="service">服务项目</label>
                  <select id="service" name="service" required defaultValue="">
                    <option value="">请选择</option>
                    <option>基础洁净洗护</option>
                    <option>精修造型护理</option>
                    <option>皮毛养护 SPA</option>
                  </select>
                </div>
              </div>
              <div className="field">
                <label htmlFor="arrival">期望到店</label>
                <input id="arrival" name="arrival" type="datetime-local" required />
              </div>
              <div className="field">
                <label htmlFor="message">备注</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="例如：胆小、毛结、皮肤敏感"
                />
              </div>
              <button className="btn btn-primary" type="submit">
                提交预约
              </button>
              <p className="notice" role="status">
                {notice}
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <strong>沐爪宠物洗护</strong>
          <span>专业、温和、透明的社区宠物护理空间</span>
        </div>
      </footer>
    </>
  );
}
