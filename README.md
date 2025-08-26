# Akaru Web Agency

웹 에이전시 Akaru의 공식 웹사이트입니다. Next.js와 GSAP를 활용한 모던하고 인터랙티브한 웹 경험을 제공합니다.

## 🚀 기술 스택

- **Framework**: Next.js 15.4.5
- **Animation**: GSAP 3.13.0
- **Styling**: CSS Modules & Custom CSS
- **Icons**: Custom SVG Components
- **Fonts**: Alliance Platt, Rubik

## 📦 설치 및 실행

프로젝트를 로컬에서 실행하려면:

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

## 🎨 GSAP 애니메이션

이 프로젝트는 다양한 GSAP 애니메이션을 포함하고 있습니다:

### 사용 가능한 애니메이션 컴포넌트

- **FadeInComponent**: 페이드 인 애니메이션
- **SlideInComponent**: 방향별 슬라이드 애니메이션
- **AnimatedText**: 텍스트 분할 애니메이션
- **StaggerContainer**: 순차적 등장 애니메이션
- **AnimatedButton**: 호버 애니메이션 버튼
- **ProjectCard**: 프로젝트 카드 애니메이션

### 사용 예제

```jsx
import { FadeInComponent, AnimatedText } from '@/components/AnimatedComponents';

// 페이드 인 애니메이션
<FadeInComponent options={{ y: 50, duration: 0.8 }}>
  <div>애니메이션될 콘텐츠</div>
</FadeInComponent>

// 텍스트 애니메이션
<AnimatedText 
  tag="h1"
  splitBy="words"
  options={{ stagger: 0.1, y: 100 }}
>
  애니메이션 텍스트
</AnimatedText>
```

### 커스텀 훅

프로젝트에는 다음과 같은 GSAP 커스텀 훅들이 포함되어 있습니다:

- `useGSAP`: 기본 GSAP 컨텍스트 관리
- `useFadeIn`: 페이드 인 애니메이션
- `useSlideIn`: 슬라이드 애니메이션
- `useScrollTrigger`: 스크롤 트리거 애니메이션
- `useTextAnimation`: 텍스트 애니메이션
- `useStaggerAnimation`: 스태거 애니메이션
- `useHoverAnimation`: 호버 애니메이션

## 📁 프로젝트 구조

```
src/
├── app/
│   ├── globals.css           # 전역 스타일
│   ├── layout.js            # 루트 레이아웃
│   └── page.js              # 메인 페이지
├── components/
│   ├── AnimatedComponents.jsx # GSAP 애니메이션 컴포넌트
│   ├── examples/
│   │   └── GSAPExample.jsx   # GSAP 사용 예제
│   ├── icon/                # SVG 아이콘 컴포넌트
│   └── layout/              # 레이아웃 컴포넌트
├── hooks/
│   └── useGSAP.js           # GSAP 커스텀 훅
├── styles/                  # 스타일 파일
└── utils/
    └── gsap.js              # GSAP 유틸리티 함수
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
