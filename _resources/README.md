# 📦 Resources

이 폴더는 프로젝트에서 사용하는 **바이너리 리소스 파일**을 관리합니다. 디자인 에셋, 이미지, 폰트 등 실제 파일들이 저장됩니다.

## 📂 폴더 구조

```
_resources/
├── design/              # 디자인 관련 리소스
│   ├── assets/          # 프론트엔드에서 사용할 실제 파일
│   │   ├── fonts/       # 폰트 파일 (.woff2, .ttf 등)
│   │   ├── icons/       # 아이콘 파일 (.svg, .png 등)
│   │   └── images/      # 이미지 리소스 (.jpg, .png, .webp 등)
│   ├── mockups/         # 디자인 목업 및 프로토타입
│   ├── style-guide/     # 스타일 가이드 관련 파일 (컬러 팔레트, 그래픽 등)
│   └── ui-kit/          # UI 컴포넌트 디자인 파일
├── fonts/               # 추가 폰트 리소스
├── images/              # 일반 이미지 리소스
└── videos/              # 동영상 파일 (데모, 튜토리얼 등)
```

## 🎯 각 폴더의 용도

### `design/` - 디자인 리소스

#### `design/assets/`
프론트엔드에서 **직접 import하여 사용**하는 파일들입니다.

**폰트 사용 예시**:
```css
/* frontend/nextjs/app/globals.css */
@font-face {
  font-family: 'Pretendard';
  src: url('../../_resources/design/assets/fonts/Pretendard-Regular.woff2') format('woff2');
  font-weight: 400;
}
```

**아이콘 사용 예시**:
```tsx
// frontend/nextjs/components/Header.tsx
import SearchIcon from '@/_resources/design/assets/icons/icon-search.svg';

export default function Header() {
  return <SearchIcon className="w-5 h-5" />;
}
```

**이미지 사용 예시**:
```tsx
// frontend/nextjs/app/page.tsx
import Image from 'next/image';
import heroImage from '@/_resources/design/assets/images/hero-background.jpg';

export default function Home() {
  return <Image src={heroImage} alt="Hero" />;
}
```

#### `design/mockups/`
디자이너가 제작한 화면 설계 파일입니다.

**저장할 파일**:
- Figma 파일 (`.fig`)
- 화면별 목업 이미지 (`.png`, `.jpg`)
- 프로토타입 PDF
- 사용자 플로우 다이어그램

**네이밍 규칙**:
```
mockups/
├── figma-design.fig
├── 01-home-page.png
├── 02-dashboard.png
├── 03-user-profile.png
└── user-flow.pdf
```

### `fonts/` - 추가 폰트
`design/assets/fonts/` 외의 추가 폰트를 저장합니다.

### `images/` - 일반 이미지
프로젝트 전반에서 사용하는 이미지 리소스입니다.

### `videos/` - 동영상
데모 영상, 튜토리얼 등을 저장합니다.

---

## 📝 파일 네이밍 규칙

### 아이콘
- 형식: `icon-{name}.svg`
- 예시: `icon-search.svg`, `icon-menu.svg`, `icon-close.svg`
- 소문자와 하이픈(-) 사용

### 이미지
- 형식: `{descriptor}-{type}.{ext}`
- 예시: `hero-background.jpg`, `placeholder-avatar.png`, `og-image.png`
- 의미를 명확히 표현

### 폰트
- 형식: `{FontName}-{Weight}.{ext}`
- 예시: `Pretendard-Regular.woff2`, `Pretendard-Bold.woff2`

### 목업
- 형식: `{순번}-{화면명}.{ext}`
- 예시: `01-home-page.png`, `02-dashboard.png`
- 숫자 접두사로 순서 관리

---

## ⚠️ Git 관리

### 커밋해야 할 파일
✅ SVG 아이콘
✅ 최적화된 이미지 (WebP, 압축된 PNG/JPG)
✅ 작은 목업 파일 (< 1MB)
✅ 폰트 파일 (woff2)

### 제외해야 할 파일
❌ 대용량 원본 파일 (PSD, Sketch, 원본 비디오)
❌ 10MB 이상의 파일
❌ 임시 파일, 캐시

**`.gitignore` 설정**: 루트 `.gitignore` 참고

---

## 🔄 워크플로우

### 디자이너 → 개발자

1. **디자이너**:
   ```bash
   # Figma에서 에셋 export
   # _resources/design/mockups/에 목업 저장
   # _resources/design/assets/icons/에 아이콘 저장
   ```

2. **개발자**:
   ```bash
   # 리소스를 코드에서 import
   import Logo from '@/_resources/design/assets/icons/logo.svg';
   ```

### 새 리소스 추가

```bash
# 1. 리소스 파일을 해당 폴더에 복사
cp new-icon.svg _resources/design/assets/icons/icon-new.svg

# 2. 파일 크기 확인 (1MB 이하 권장)
du -h _resources/design/assets/icons/icon-new.svg

# 3. Git에 추가
git add _resources/design/assets/icons/icon-new.svg
git commit -m "Add new icon asset"
```

---

## 🔗 관련 문서

- [Design Documentation](../_docs/design/) - 디자인 가이드라인 및 명세 (문서)
- [References](../_references/) - 벤치마크 및 참고 자료
- [Planning](../_docs/planning/) - 프로젝트 기획

---

## 💡 팁

### 이미지 최적화
```bash
# ImageMagick으로 이미지 압축
convert input.png -quality 85 -strip output.png

# WebP 변환
cwebp -q 80 input.jpg -o output.webp
```

### 아이콘 최적화
```bash
# SVGO로 SVG 최적화
npx svgo icon.svg -o icon-optimized.svg
```

### 폰트 서브셋
한글 폰트는 용량이 크므로, 필요한 글자만 추출하여 사용하세요.

---

**작성 시작일**: {TIMESTAMP}
**관리자**: {GITHUB_USER}
