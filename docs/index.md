---
hide:
  - navigation
  - toc
  - footer
  - header
---

<div class="entrance-container">
  <div class="stars"></div>
  <div class="entrance-content">
    <h1 class="entrance-title">Welcome to<br>AIB001's Universe</h1>
    <p class="entrance-subtitle">Research • Learning • Life</p>
    <div class="button-container">
      <a href="home/" class="entrance-button">
        <span class="entrance-button-text">Enter</span>
        <span class="entrance-button-icon">→</span>
      </a>
    </div>
  </div>
</div>

<style>
/* 改进的入口页面样式 */
.entrance-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: url('img/background3.png');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  overflow: hidden;
}

/* 明显的星星/粒子效果 */
.stars {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.stars::before,
.stars::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
}

.stars::before {
  box-shadow: 
    5vw 5vh 1px 1px rgba(255, 255, 255, 0.5),
    10vw 10vh 1px 1px rgba(255, 255, 255, 0.5),
    15vw 15vh 1px 1px rgba(255, 255, 255, 0.5),
    20vw 20vh 1px 1px rgba(255, 255, 255, 0.5),
    25vw 25vh 1px 1px rgba(255, 255, 255, 0.5),
    30vw 30vh 1px 1px rgba(255, 255, 255, 0.5),
    35vw 35vh 1px 1px rgba(255, 255, 255, 0.5),
    40vw 40vh 1px 1px rgba(255, 255, 255, 0.5),
    45vw 45vh 1px 1px rgba(255, 255, 255, 0.5),
    50vw 50vh 1px 1px rgba(255, 255, 255, 0.5),
    55vw 55vh 1px 1px rgba(255, 255, 255, 0.5),
    60vw 60vh 1px 1px rgba(255, 255, 255, 0.5),
    65vw 65vh 1px 1px rgba(255, 255, 255, 0.5),
    70vw 70vh 1px 1px rgba(255, 255, 255, 0.5),
    75vw 75vh 1px 1px rgba(255, 255, 255, 0.5),
    80vw 80vh 1px 1px rgba(255, 255, 255, 0.5),
    85vw 85vh 1px 1px rgba(255, 255, 255, 0.5),
    90vw 90vh 1px 1px rgba(255, 255, 255, 0.5),
    95vw 95vh 1px 1px rgba(255, 255, 255, 0.5);
  animation: blinkStars 8s linear infinite;
}

.stars::after {
  box-shadow: 
    8vw 8vh 1px 1px rgba(255, 255, 255, 0.5),
    13vw 13vh 1px 1px rgba(255, 255, 255, 0.5),
    18vw 18vh 1px 1px rgba(255, 255, 255, 0.5),
    23vw 23vh 1px 1px rgba(255, 255, 255, 0.5),
    28vw 28vh 1px 1px rgba(255, 255, 255, 0.5),
    33vw 33vh 1px 1px rgba(255, 255, 255, 0.5),
    38vw 38vh 1px 1px rgba(255, 255, 255, 0.5),
    43vw 43vh 1px 1px rgba(255, 255, 255, 0.5),
    48vw 48vh 1px 1px rgba(255, 255, 255, 0.5),
    53vw 53vh 1px 1px rgba(255, 255, 255, 0.5),
    58vw 58vh 1px 1px rgba(255, 255, 255, 0.5),
    63vw 63vh 1px 1px rgba(255, 255, 255, 0.5),
    68vw 68vh 1px 1px rgba(255, 255, 255, 0.5),
    73vw 73vh 1px 1px rgba(255, 255, 255, 0.5),
    78vw 78vh 1px 1px rgba(255, 255, 255, 0.5),
    83vw 83vh 1px 1px rgba(255, 255, 255, 0.5),
    88vw 88vh 1px 1px rgba(255, 255, 255, 0.5),
    93vw 93vh 1px 1px rgba(255, 255, 255, 0.5),
    98vw 98vh 1px 1px rgba(255, 255, 255, 0.5);
  animation: blinkStars 8s linear 4s infinite;
}

@keyframes blinkStars {
  0% { opacity: 0.5; }
  50% { opacity: 1; }
  100% { opacity: 0.5; }
}

.entrance-content {
  text-align: center;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 3.5rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  max-width: 90%;
  width: 500px;
  animation: float 6s ease-in-out infinite;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* 内容卡片边缘闪光效果 */
.entrance-content::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    to bottom right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.1) 25%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0) 75%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: rotate(30deg);
  animation: shimmer 6s linear infinite;
  z-index: -1;
}

@keyframes shimmer {
  0% { transform: rotate(30deg) translateX(-100%); }
  100% { transform: rotate(30deg) translateX(100%); }
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
}

.entrance-title {
  font-size: 2.6rem;
  font-weight: 700;
  color: #7e57c2;
  margin-bottom: 1rem;
  letter-spacing: -0.5px;
  line-height: 1.2;
  background: linear-gradient(45deg, #7e57c2, #9575cd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  animation: titlePulse 4s ease-in-out infinite;
}

@keyframes titlePulse {
  0% { opacity: 1; }
  50% { opacity: 0.8; }
  100% { opacity: 1; }
}

.entrance-subtitle {
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  color: rgba(0, 0, 0, 0.7);
  letter-spacing: 1px;
  font-weight: 500;
}

.button-container {
  position: relative;
  display: inline-block;
}

.button-container::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 10px;
  bottom: -10px;
  left: 0;
  background: radial-gradient(ellipse at center, rgba(126, 87, 194, 0.3) 0%, transparent 70%);
  filter: blur(5px);
  transform-origin: center;
  transform: scaleX(0.7);
  transition: transform 0.3s ease;
}

.button-container:hover::after {
  transform: scaleX(0.9);
}

.entrance-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 3rem;
  background: linear-gradient(45deg, #7e57c2, #9575cd);
  color: white !important;
  font-weight: 600;
  text-decoration: none;
  border-radius: 50px;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  box-shadow: 0 6px 20px rgba(126, 87, 194, 0.4);
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.entrance-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.5),
    transparent
  );
  transition: 0.5s;
  z-index: -1;
}

.entrance-button::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(126, 87, 194, 0.8), rgba(126, 87, 194, 0));
  opacity: 0;
  transition: opacity 0.3s;
  z-index: -2;
}

.entrance-button:hover {
  transform: translateY(-5px) scale(1.03);
  box-shadow: 0 10px 25px rgba(126, 87, 194, 0.5);
  letter-spacing: 0.5px;
}

.entrance-button:hover::before {
  left: 100%;
}

.entrance-button:hover::after {
  opacity: 1;
}

.entrance-button:active {
  transform: translateY(-2px) scale(0.98);
  box-shadow: 0 5px 15px rgba(126, 87, 194, 0.5);
}

.entrance-button-text {
  display: inline-block;
  transition: transform 0.3s ease;
}

.entrance-button-icon {
  display: inline-block;
  margin-left: 10px;
  transition: all 0.3s ease;
}

.entrance-button:hover .entrance-button-text {
  transform: translateX(-3px);
}

.entrance-button:hover .entrance-button-icon {
  transform: translateX(5px);
}

/* 暗色模式调整 */
[data-md-color-scheme="slate"] .entrance-content {
  background-color: rgba(30, 30, 46, 0.9);
}

[data-md-color-scheme="slate"] .entrance-subtitle {
  color: rgba(255, 255, 255, 0.7);
}

[data-md-color-scheme="slate"] .entrance-title {
  background: linear-gradient(45deg, #9575cd, #b39ddb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

/* 强制隐藏所有导航元素 */
.md-header, .md-tabs, .md-sidebar, .md-footer {
  display: none !important;
}

/* 媒体查询，在移动设备上调整样式 */
@media (max-width: 768px) {
  .entrance-content {
    padding: 2.5rem;
    width: 85%;
  }
  .entrance-title {
    font-size: 2.2rem;
  }
  .entrance-subtitle {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
  .entrance-button {
    padding: 0.8rem 2.5rem;
    font-size: 1.1rem;
  }
}
</style>