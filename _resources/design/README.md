# 🎨 Design Resources

이 폴더는 프로젝트의 **디자인 리소스와 가이드라인**을 관리합니다. 디자이너, 개발자, 기획자가 협업할 때 사용하는 중앙 저장소입니다.

## 📂 폴더 구조

```
design/
├── assets/              # 디자인 에셋 (실제 파일)
│   ├── fonts/          # 폰트 파일
│   ├── icons/          # 아이콘 (SVG, PNG)
│   └── images/         # 이미지 리소스
├── mockups/            # 디자인 목업 및 프로토타입
├── style-guide/        # 스타일 가이드 문서
└── ui-kit/             # UI 컴포넌트 가이드
```

---

## 🎯 각 폴더의 용도

### 1. `assets/` - 디자인 에셋 저장소

**용도**: 프론트엔드에서 실제로 사용할 파일들을 저장합니다.

#### `fonts/` - 폰트 파일
프로젝트 전용 폰트를 저장합니다.

**저장할 파일**:
```
fonts/
├── Pretendard-Regular.woff2
├── Pretendard-Bold.woff2
├── NotoSansKR-Regular.woff2
└── JetBrainsMono-Regular.woff2
```

**프론트엔드에서 사용 예시**:
```css
/* frontend/nextjs/app/globals.css */
@font-face {
  font-family: 'Pretendard';
  src: url('../../_docs/design/assets/fonts/Pretendard-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}
```

#### `icons/` - 아이콘 파일
재사용 가능한 아이콘을 SVG 또는 PNG 형식으로 저장합니다.

**저장할 파일**:
```
icons/
├── logo.svg
├── logo-symbol.svg
├── icon-search.svg
├── icon-menu.svg
├── icon-close.svg
└── icon-user.svg
```

**네이밍 규칙**:
- `icon-{name}.svg` 형식 사용
- 소문자와 하이픈(-) 사용
- 의미를 명확히 표현

**프론트엔드에서 사용 예시**:
```tsx
// frontend/nextjs/components/Header.tsx
import Image from 'next/image';
import SearchIcon from '@/_docs/design/assets/icons/icon-search.svg';

export default function Header() {
  return (
    <button>
      <SearchIcon className="w-5 h-5" />
      검색
    </button>
  );
}
```

#### `images/` - 이미지 리소스
프로젝트에서 사용하는 이미지 파일을 저장합니다.

**저장할 파일**:
```
images/
├── hero-background.jpg
├── placeholder-avatar.png
├── empty-state.svg
└── og-image.png          # Open Graph 이미지
```

---

### 2. `mockups/` - 디자인 목업 및 프로토타입

**용도**: 디자이너가 제작한 화면 설계, 프로토타입 파일을 저장합니다.

**저장할 파일**:
```
mockups/
├── figma-design.fig           # Figma 원본 파일
├── 01-home-page.png           # 홈페이지 목업
├── 02-dashboard.png           # 대시보드 목업
├── 03-user-profile.png        # 사용자 프로필 페이지
├── 04-settings.png            # 설정 페이지
└── user-flow.pdf              # 사용자 플로우 다이어그램
```

**파일 네이밍 규칙**:
- 번호 접두사 사용: `01-`, `02-`, ...
- 페이지/화면 이름을 명확히 표시
- 버전 관리가 필요한 경우: `home-page-v1.png`, `home-page-v2.png`

**활용 방법**:
1. **개발 참고**: 개발자가 목업을 보고 UI 구현
2. **리뷰**: 기획자/클라이언트 리뷰 및 피드백
3. **문서화**: 기능 명세서에 화면 이미지 첨부
4. **버전 관리**: 디자인 변경 이력 추적

**Figma 링크 관리**:
온라인 Figma 파일의 경우, 이곳에 링크를 기록하세요:
```markdown
## Figma Links

- **Main Design**: https://figma.com/file/xxx
- **Component Library**: https://figma.com/file/yyy
- **Prototype**: https://figma.com/proto/zzz
```

---

### 3. `style-guide/` - 스타일 가이드 문서

**용도**: 디자인 시스템의 규칙과 가이드라인을 문서화합니다.

**작성할 문서**:
```
style-guide/
├── README.md              # 스타일 가이드 개요
├── colors.md              # 컬러 팔레트
├── typography.md          # 타이포그래피 규칙
├── spacing.md             # 간격/여백 시스템
├── shadows.md             # 그림자 효과
└── animations.md          # 애니메이션 규칙
```

#### 예시: `colors.md`
```markdown
# Color Palette

## Primary Colors
- **Primary**: `#3B82F6` (Blue 500)
  - 주요 액션 버튼, 링크
- **Primary Dark**: `#2563EB` (Blue 600)
  - 버튼 hover 상태
- **Primary Light**: `#60A5FA` (Blue 400)
  - 배경 강조

## Semantic Colors
- **Success**: `#10B981` (Green 500) - 성공 메시지
- **Warning**: `#F59E0B` (Amber 500) - 경고 메시지
- **Error**: `#EF4444` (Red 500) - 에러 메시지
- **Info**: `#3B82F6` (Blue 500) - 정보 메시지

## Neutral Colors
- **Text Primary**: `#1F2937` (Gray 800)
- **Text Secondary**: `#6B7280` (Gray 500)
- **Border**: `#E5E7EB` (Gray 200)
- **Background**: `#F9FAFB` (Gray 50)

## 사용 예시
\`\`\`tsx
<button className="bg-primary hover:bg-primary-dark text-white">
  확인
</button>
\`\`\`
```

#### 예시: `typography.md`
```markdown
# Typography

## Font Family
- **Primary**: Pretendard (한글), Inter (영문)
- **Monospace**: JetBrains Mono (코드)

## Font Sizes
| 이름 | 크기 | 행간 | 용도 |
|------|------|------|------|
| H1   | 48px | 56px | 페이지 제목 |
| H2   | 36px | 44px | 섹션 제목 |
| H3   | 24px | 32px | 하위 섹션 |
| Body | 16px | 24px | 본문 |
| Small| 14px | 20px | 캡션, 부가 정보 |

## Font Weights
- **Regular**: 400 - 일반 텍스트
- **Medium**: 500 - 강조 텍스트
- **Bold**: 700 - 제목, 중요 정보

## 사용 예시
\`\`\`tsx
<h1 className="text-5xl font-bold">페이지 제목</h1>
<p className="text-base font-normal">본문 텍스트</p>
\`\`\`
```

#### 예시: `spacing.md`
```markdown
# Spacing System

## 간격 단위
8px 기반 spacing scale 사용:

| 이름 | 값   | Tailwind |
|------|------|----------|
| xs   | 4px  | `p-1`    |
| sm   | 8px  | `p-2`    |
| md   | 16px | `p-4`    |
| lg   | 24px | `p-6`    |
| xl   | 32px | `p-8`    |
| 2xl  | 48px | `p-12`   |

## 컴포넌트 간격
- **섹션 간 간격**: 48px (2xl)
- **카드 내부 여백**: 24px (lg)
- **버튼 내부 여백**: 12px 24px
- **입력 필드 간격**: 16px (md)
```

---

### 4. `ui-kit/` - UI 컴포넌트 가이드

**용도**: 재사용 가능한 UI 컴포넌트의 디자인 명세를 작성합니다.

**작성할 문서**:
```
ui-kit/
├── README.md              # UI Kit 개요
├── buttons.md             # 버튼 컴포넌트
├── forms.md               # 폼 요소
├── cards.md               # 카드 컴포넌트
├── modals.md              # 모달/다이얼로그
├── navigation.md          # 네비게이션
└── tables.md              # 테이블
```

#### 예시: `buttons.md`
```markdown
# Button Component

## Variants

### Primary Button
- **배경**: Primary Color (#3B82F6)
- **텍스트**: White
- **높이**: 40px
- **패딩**: 12px 24px
- **Border Radius**: 8px
- **폰트**: Medium (500), 16px

### Secondary Button
- **배경**: Transparent
- **테두리**: 1px solid Primary Color
- **텍스트**: Primary Color
- **높이**: 40px
- **패딩**: 12px 24px

### Danger Button
- **배경**: Error Color (#EF4444)
- **텍스트**: White
- **용도**: 삭제, 취소 등 위험한 작업

## Sizes
| Size | 높이 | 패딩 | 폰트 크기 |
|------|------|------|-----------|
| sm   | 32px | 8px 16px | 14px |
| md   | 40px | 12px 24px | 16px |
| lg   | 48px | 16px 32px | 18px |

## States
- **Hover**: 배경색 10% 어둡게
- **Active**: 배경색 20% 어둡게
- **Disabled**: 투명도 50%, cursor: not-allowed
- **Loading**: 스피너 표시, 클릭 비활성화

## 코드 예시
\`\`\`tsx
<Button variant="primary" size="md">
  확인
</Button>

<Button variant="secondary" size="md" disabled>
  비활성화
</Button>

<Button variant="danger" size="sm" loading>
  삭제 중...
</Button>
\`\`\`
```

#### 예시: `forms.md`
```markdown
# Form Components

## Input Field

### 기본 스타일
- **높이**: 40px
- **패딩**: 8px 12px
- **테두리**: 1px solid Gray 300
- **Border Radius**: 6px
- **폰트**: 16px Regular

### States
- **Focus**: 2px ring Primary Color
- **Error**: 테두리 Red 500, 에러 메시지 표시
- **Disabled**: 배경 Gray 100, 텍스트 Gray 400

## Label
- **폰트 크기**: 14px
- **폰트 굵기**: Medium (500)
- **색상**: Gray 700
- **하단 여백**: 8px

## Helper Text
- **폰트 크기**: 12px
- **색상**: Gray 500 (일반), Red 500 (에러)
- **상단 여백**: 4px

## 코드 예시
\`\`\`tsx
<div className="form-group">
  <label className="text-sm font-medium text-gray-700">
    이메일
  </label>
  <input
    type="email"
    className="w-full h-10 px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary"
    placeholder="example@email.com"
  />
  <p className="mt-1 text-xs text-gray-500">
    로그인에 사용할 이메일을 입력하세요
  </p>
</div>
\`\`\`
```

---

## 🔄 워크플로우

### 1. 디자이너 → 개발자

1. **디자이너**:
   - Figma에서 디자인 작업
   - 완성된 디자인을 `mockups/`에 PNG로 내보내기
   - `style-guide/`, `ui-kit/`에 명세 작성

2. **개발자**:
   - `mockups/` 목업을 참고하여 UI 구현
   - `style-guide/` 규칙에 따라 스타일 적용
   - `ui-kit/` 명세에 따라 컴포넌트 개발

### 2. 에셋 관리

**폰트 추가 시**:
```bash
# 1. 폰트 파일을 assets/fonts/에 저장
cp Pretendard-Regular.woff2 _docs/design/assets/fonts/

# 2. globals.css에 @font-face 추가
# 3. tailwind.config.js에 폰트 패밀리 등록
```

**아이콘 추가 시**:
```bash
# 1. SVG 파일을 assets/icons/에 저장
cp icon-new.svg _docs/design/assets/icons/

# 2. 컴포넌트에서 import하여 사용
```

---

## 📝 문서 작성 가이드

### 스타일 가이드 작성 시
1. **명확한 값 사용**: "약간 어둡게" ❌ → "10% 어둡게" ✅
2. **코드 예시 포함**: 실제 사용 방법 제시
3. **시각 자료 추가**: 가능하면 이미지나 색상 샘플 포함
4. **일관성 유지**: 용어, 단위를 프로젝트 전체에서 통일

### UI Kit 작성 시
1. **모든 variants 정의**: primary, secondary, danger 등
2. **모든 states 정의**: hover, active, disabled, loading 등
3. **반응형 고려**: 모바일/태블릿/데스크톱별 변경사항
4. **접근성 언급**: ARIA 속성, 키보드 네비게이션 등

---

## 🎯 언제 이 폴더를 사용하나요?

### ✅ 사용이 권장되는 경우

1. **디자이너와 협업하는 프로젝트**
   - Figma, Sketch 등 디자인 툴 사용
   - 디자인 시스템 구축 필요

2. **브랜드 가이드라인이 중요한 프로젝트**
   - 회사/제품 브랜드 아이덴티티 유지
   - 일관된 UI/UX 제공

3. **중대형 프로젝트**
   - 여러 페이지/화면
   - 재사용 가능한 컴포넌트가 많음
   - 팀 규모가 크거나 장기 프로젝트

4. **화이트라벨 제품**
   - 고객사별 다른 디자인 적용
   - 테마 커스터마이징 필요

### ❌ 불필요한 경우

1. **작은 개인 프로젝트**
   - 빠른 프로토타이핑이 목적
   - 1-2명의 개발자

2. **백엔드 전용 프로젝트**
   - API만 제공
   - UI가 없음

3. **UI 라이브러리 사용**
   - Material-UI, Ant Design, shadcn/ui 등 사용
   - 커스텀 디자인이 거의 없음

---

## 🔗 관련 리소스

- [Planning](./../planning/) - 프로젝트 기획 및 요구사항
- [API Documentation](./../api/) - API 명세
- [Implementation](./../implementation/) - 구현 가이드

---

**작성 시작일**: {TIMESTAMP}
**관리자**: {GITHUB_USER}

## 💡 팁

- 디자인 파일은 `.gitignore`에서 제외하지 말 것 (버전 관리 필요)
- 큰 Figma 파일은 GitHub에 직접 올리지 말고 링크만 기록
- 정기적으로 목업과 실제 구현이 일치하는지 확인
- 디자인 변경 시 관련 문서도 함께 업데이트
