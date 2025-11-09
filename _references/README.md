# 📚 References

이 폴더는 프로젝트 개발에 **참고한 외부 자료**를 체계적으로 관리합니다. 벤치마크 사이트, 기술 조사, 디자인 영감 등을 저장합니다.

## 📂 폴더 구조

```
_references/
├── benchmarks/              # 벤치마크 & 경쟁사 분석
│   ├── websites/            # 웹사이트 분석
│   │   ├── screenshots/     # 스크린샷
│   │   ├── analysis/        # 분석 문서
│   │   └── links.md         # 링크 모음
│   └── apps/                # 모바일/데스크톱 앱 분석
│       ├── screenshots/     # 앱 스크린샷
│       ├── features/        # 기능 분석
│       └── links.md         # 앱 링크
├── inspiration/             # 디자인 영감 & UI/UX 참고
│   ├── ui-patterns/         # UI 패턴 사례
│   ├── interactions/        # 인터랙션 디자인
│   └── links.md             # 영감 사이트 링크
├── research/                # 기술 조사 & 라이브러리 비교
│   ├── frontend/            # 프론트엔드 기술
│   ├── backend/             # 백엔드 기술
│   ├── database/            # 데이터베이스 기술
│   └── architecture/        # 아키텍처 패턴
└── documentation/           # 외부 API/라이브러리 문서
    ├── apis/                # 외부 API 문서
    └── libraries/           # 라이브러리 참고 자료
```

---

## 🎯 각 폴더의 용도

### 1. `benchmarks/` - 벤치마크 & 경쟁사 분석

프로젝트와 유사한 서비스를 분석하고 배울 점을 찾습니다.

#### 웹사이트 벤치마크 예시

**`benchmarks/websites/links.md`**:
```markdown
# Benchmark Websites

## E-commerce Platforms

### Amazon
- **URL**: https://amazon.com
- **분석 포인트**: 상품 검색, 필터링, 체크아웃 플로우
- **스크린샷**: ./screenshots/amazon-product-page.png
- **상세 분석**: ./analysis/amazon-checkout-flow.md

### Shopify
- **URL**: https://shopify.com
- **분석 포인트**: 관리자 대시보드 UX
- **참고 기능**:
  - 드래그 앤 드롭 상품 정렬
  - 실시간 재고 관리
  - 주문 상태 추적

## SaaS Dashboards

### Vercel Dashboard
- **URL**: https://vercel.com/dashboard
- **분석 포인트**:
  - 프로젝트 관리 UI
  - 배포 로그 시각화
  - 팀 협업 기능
- **스크린샷**: ./screenshots/vercel-dashboard-overview.png
```

**`benchmarks/websites/analysis/amazon-checkout-flow.md`**:
```markdown
# Amazon Checkout Flow 분석

## 주요 단계
1. 장바구니 → 2. 배송 주소 → 3. 결제 정보 → 4. 주문 확인

## 우수 사례
- **원클릭 주문**: 저장된 정보로 즉시 구매
- **프로그레스 바**: 현재 단계 명확히 표시
- **자동 저장**: 중간에 이탈해도 장바구니 유지

## 적용 아이디어
- [ ] 프로그레스 바 구현
- [ ] 주문 정보 자동 저장
- [ ] 배송지 주소록 관리

## 스크린샷
![Step 1](./../screenshots/amazon-checkout-step1.png)
![Step 2](./../screenshots/amazon-checkout-step2.png)
```

#### 모바일 앱 벤치마크 예시

**`benchmarks/apps/links.md`**:
```markdown
# Benchmark Mobile Apps

## Productivity Apps

### Notion (iOS/Android)
- **분석 포인트**: 블록 기반 에디터, 오프라인 동기화
- **스크린샷**: ./screenshots/notion-editor.png
- **기능 분석**: ./features/notion-block-editor.md

### Slack (iOS/Android)
- **분석 포인트**: 실시간 채팅, 알림 관리
- **참고 기능**:
  - 스레드 기반 대화
  - 멘션 시스템
  - 파일 공유 UI
```

---

### 2. `inspiration/` - 디자인 영감

우수한 디자인 사례를 수집합니다.

**`inspiration/links.md`**:
```markdown
# Design Inspiration

## UI Pattern Collections
- [UI Patterns](http://ui-patterns.com/) - 검증된 UI 패턴
- [Mobbin](https://mobbin.com/) - 모바일 앱 디자인 갤러리
- [Dribbble](https://dribbble.com/) - 디자인 영감

## Animation & Interaction
- [CodePen](https://codepen.io/) - 인터랙티브 데모
- [Awwwards](https://www.awwwards.com/) - 창의적인 웹 디자인

## Color Schemes
- [Coolors](https://coolors.co/) - 색상 팔레트 생성
- [Adobe Color](https://color.adobe.com/) - 색상 조합

## Typography
- [Google Fonts](https://fonts.google.com/)
- [Font Pair](https://fontpair.co/) - 폰트 조합 제안
```

**`inspiration/ui-patterns/card-layouts.md`**:
```markdown
# Card Layout Patterns

## Pinterest-style Masonry Grid
- **사이트**: Pinterest, Unsplash
- **특징**: 다양한 높이의 카드를 효율적으로 배치
- **적용 가능**: 포트폴리오, 갤러리

## Netflix-style Horizontal Scroll
- **사이트**: Netflix, YouTube
- **특징**: 카테고리별 가로 스크롤
- **적용 가능**: 콘텐츠 목록, 상품 추천
```

---

### 3. `research/` - 기술 조사

기술 스택 선정을 위한 조사 자료입니다.

**`research/frontend/state-management.md`**:
```markdown
# 상태 관리 라이브러리 비교

## 후보 라이브러리

### 1. Zustand
- **Bundle Size**: 1.3KB (gzipped)
- **학습 곡선**: 낮음
- **장점**: 간단한 API, TypeScript 지원 우수
- **단점**: DevTools가 Redux만큼 강력하지 않음
- **벤치마크**: [링크]

### 2. Jotai
- **Bundle Size**: 3KB (gzipped)
- **학습 곡선**: 중간
- **장점**: Atomic 패턴, React Suspense 지원
- **단점**: Zustand보다 복잡

### 3. Redux Toolkit
- **Bundle Size**: 11KB (gzipped)
- **학습 곡선**: 높음
- **장점**: 강력한 DevTools, 검증된 패턴
- **단점**: 보일러플레이트 코드

## 선택 기준
| 기준 | Zustand | Jotai | Redux Toolkit |
|------|---------|-------|---------------|
| 번들 크기 | ⭐⭐⭐ | ⭐⭐ | ⭐ |
| 학습 곡선 | ⭐⭐⭐ | ⭐⭐ | ⭐ |
| DevTools | ⭐⭐ | ⭐⭐ | ⭐⭐⭐ |
| TypeScript | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |

## 결론
- **소규모 프로젝트**: Zustand
- **중대형 프로젝트**: Redux Toolkit
- **Suspense 활용**: Jotai
```

**`research/backend/orm-comparison.md`**:
```markdown
# ORM 비교: Prisma vs TypeORM vs Drizzle

## Prisma
- **Type Safety**: ⭐⭐⭐⭐⭐
- **성능**: ⭐⭐⭐⭐
- **마이그레이션**: 자동 생성
- **학습 곡선**: 낮음

## TypeORM
- **Type Safety**: ⭐⭐⭐⭐
- **성능**: ⭐⭐⭐
- **마이그레이션**: 수동 작성
- **학습 곡선**: 중간

## Drizzle
- **Type Safety**: ⭐⭐⭐⭐⭐
- **성능**: ⭐⭐⭐⭐⭐
- **마이그레이션**: 수동 작성
- **학습 곡선**: 낮음

## 벤치마크
- [Prisma vs Drizzle 성능 비교](./benchmarks/orm-performance.pdf)

## 권장 사항
- **빠른 프로토타이핑**: Prisma
- **최고 성능**: Drizzle
- **레거시 프로젝트**: TypeORM
```

---

### 4. `documentation/` - 외부 문서

자주 참조하는 API나 라이브러리 문서를 보관합니다.

**`documentation/apis/stripe-integration.md`**:
```markdown
# Stripe API 통합 가이드

## 공식 문서
- [Stripe API Reference](https://stripe.com/docs/api)
- [Checkout Session](https://stripe.com/docs/api/checkout/sessions)

## 주요 엔드포인트

### 결제 세션 생성
\`\`\`javascript
const session = await stripe.checkout.sessions.create({
  payment_method_types: ['card'],
  line_items: [{ price: 'price_xxx', quantity: 1 }],
  mode: 'payment',
  success_url: 'https://example.com/success',
  cancel_url: 'https://example.com/cancel',
});
\`\`\`

### Webhook 처리
\`\`\`javascript
const event = stripe.webhooks.constructEvent(
  req.body,
  sig,
  endpointSecret
);

switch (event.type) {
  case 'checkout.session.completed':
    // 결제 완료 처리
    break;
}
\`\`\`

## 테스트 카드 번호
- 성공: `4242 4242 4242 4242`
- 실패: `4000 0000 0000 0002`

## 참고 자료
- [GitHub Examples](https://github.com/stripe/stripe-samples)
- [커뮤니티 가이드](./community-guides/)
```

---

## 📝 작성 가이드

### 벤치마크 문서 작성 시
1. **URL과 날짜 기록**: 사이트는 변할 수 있음
2. **스크린샷 첨부**: 시각적 참고 자료
3. **핵심만 요약**: 전체가 아닌 배울 점만
4. **적용 계획 작성**: 실제로 어떻게 활용할지

### 기술 조사 작성 시
1. **객관적 비교**: 장단점 명확히
2. **수치 데이터**: 성능, 번들 크기 등
3. **실제 사용 사례**: 레퍼런스 프로젝트
4. **결론 및 권장사항**: 명확한 선택 기준

### 링크 관리
- 정기적으로 링크 유효성 확인
- Wayback Machine 활용 (사이트 변경 대비)
- 중요한 페이지는 PDF로 저장

---

## 🔄 워크플로우

### 새 벤치마크 추가

```bash
# 1. 스크린샷 캡처
# 2. 스크린샷 저장
cp screenshot.png _references/benchmarks/websites/screenshots/site-name-feature.png

# 3. links.md에 추가
echo "### Site Name
- URL: https://example.com
- Screenshot: ./screenshots/site-name-feature.png
" >> _references/benchmarks/websites/links.md

# 4. 상세 분석 작성 (필요시)
vi _references/benchmarks/websites/analysis/site-name-analysis.md
```

### 기술 조사

```bash
# 1. 조사 문서 작성
vi _references/research/frontend/new-library-comparison.md

# 2. 벤치마크 실행 및 결과 저장
npm run benchmark > _references/research/frontend/benchmark-results.txt

# 3. 결론을 _docs/technical/에 반영
```

---

## 🔗 관련 문서

- [Design Documentation](../_docs/design/) - 디자인 가이드라인
- [Planning](../_docs/planning/) - 프로젝트 기획
- [Resources](../_resources/) - 실제 리소스 파일

---

## 💡 팁

### 효과적인 벤치마크
- **경쟁사만 보지 말고**: 다른 산업의 우수 사례도 참고
- **정기적인 업데이트**: 분기별로 새로운 트렌드 확인
- **팀과 공유**: 발견한 좋은 사례는 팀원과 공유

### 기술 조사
- **PoC 먼저**: 문서만 보지 말고 직접 테스트
- **커뮤니티 확인**: GitHub Stars, npm 다운로드, Stack Overflow
- **장기 지원 여부**: 라이브러리 유지보수 상태 확인

---

**작성 시작일**: {TIMESTAMP}
**관리자**: {GITHUB_USER}

---

## 📋 체크리스트

### 벤치마크 사이트 추가 시
- [ ] 사이트 URL과 접속 날짜 기록
- [ ] 주요 화면 스크린샷 저장
- [ ] 핵심 기능 또는 디자인 요소 분석
- [ ] 프로젝트에 적용 가능한 아이디어 정리

### 기술 조사 시
- [ ] 최소 3개 이상 대안 비교
- [ ] 성능, 번들 크기 등 정량적 데이터 수집
- [ ] 장단점 객관적으로 정리
- [ ] 프로젝트에 맞는 선택 기준 제시
- [ ] 실제 PoC 또는 벤치마크 수행
