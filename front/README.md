# 🎵 오락가락 Frontend

> 음성 분석 기반 맞춤형 노래 추천 플랫폼의 프론트엔드

## 🚀 빠른 시작

### 설치
```bash
npm install
```

## 📁 폴더별 컴포넌트 분류
```
src/components/
├── 📱 common/           # 공통 컴포넌트
│   ├── Header.tsx       # 메인 헤더 (네비게이션, 프로필)
│   ├── Footer.tsx       # 푸터
│   ├── LoadingSpinner.tsx
│   └── SimpleHeader.tsx # 간소화된 헤더
│
├── 🔐 auth/             # 인증 관련
│   └── AuthGuard.tsx    # 라우트 보호 컴포넌트
│
├── 🎵 album/            # 앨범 관련 (핵심 기능)
│   ├── ImmersivePlaybackModal.tsx  # 3D 몰입 재생 모달
│   ├── AlbumInfoStepRedesigned.tsx # 앨범 정보 입력
│   ├── CoverCanvas.tsx  # AI 커버 생성 캔버스
│   ├── RecordingSelectionStep.tsx  # 녹음 선택
│   └── playback/        # 재생 관련 하위 컴포넌트
│
├── 🎤 record/           # 녹음 관련 (Web Audio API)
│   ├── RecordingControls.tsx       # 녹음 컨트롤
│   ├── KaraokePlayer.tsx           # MR 플레이어
│   ├── PitchGraph.tsx              # 실시간 피치 분석
│   ├── VolumeVisualizer.tsx        # 볼륨 시각화
│   ├── CyberpunkSpeaker3D.tsx      # 3D 스피커 (Three.js)
│   └── YouTubeMRPlayer.tsx         # 유튜브 MR 연동
│
├── 🎮 voiceTest/        # 음성 테스트 게임
│   ├── VoiceTestGame.tsx           # Phaser 게임 엔진
│   ├── VoiceTestSelection.tsx      # 녹음 선택
│   └── VoiceRangeResultModal.tsx   # 결과 모달
│
├── 👥 feed/             # 소셜 피드
│   ├── FeedTabs.tsx     # 피드 탭 (전체/팔로잉)
│   ├── CommentDrawer.tsx
│   └── FeedSortFilter.tsx
│
├── 🎯 recommendation/   # 추천 관련
│   ├── RecommendationList.tsx      # 추천 곡 목록
│   ├── RecordingCalendar.tsx       # 녹음 달력
│   └── RangeMatchGraph.tsx         # 음역대 매칭 그래프
│
├── 👤 profile/          # 프로필 관련
│   ├── ProfileHeader.tsx
│   └── ProfileEditor.tsx
│
└── 🎨 ui/               # 재사용 UI 컴포넌트
    ├── button.tsx
    └── index.tsx
```

## 📍 라우트 분류
```
// 🔓 공개 라우트 (인증 불필요)
/                           → LandingPage
/login/success             → LoginSuccessPage
/*                         → NotFoundPage (404)

// 🔒 인증 필요 라우트 (AuthGuard 적용)
/onboarding/range          → OnboardingRangePage (음역대 측정 게임)
/recommendations           → RecommendationsPage (AI 추천)
/voice-test               → VoiceTestPage (음성 테스트)
/record                   → RecordPage (녹음)
/ai-demo                  → AIDemoPage (AI 데모)

// 💿 앨범 관련
/albums/create             → AlbumCreatePage (앨범 생성)
/albums/:albumId/edit      → AlbumCreatePage (앨범 편집)
/albums/:albumId           → AlbumDetailPage (앨범 상세)

// 👥 소셜 기능
/feed                     → FeedPage (피드)
/users/:userId            → MyPage (다른 사용자 프로필)

// 👤 마이페이지 (다중 라우트)
/me                       → MyPage (메인)
/me/recordings            → MyPage (내 녹음)
/me/albums                → MyPage (내 앨범)
/me/ai-covers             → MyPage (AI 커버)
/me/edit                  → MyPage (프로필 편집)
```

## 🔐 인증 가드 시스템
```
// AuthGuard 컴포넌트로 보호되는 모든 라우트
<Route path="/protected" element={
  <AuthGuard>
    <ProtectedComponent />
  </AuthGuard>
} />

// 인증 상태별 동작:
// ✅ 로딩 중 → 로딩 스피너 표시
// ❌ 미인증 → LandingPage로 리다이렉트  
// ✅ 인증됨 → 해당 컴포넌트 렌더링
```

## 🎯 주요 페이지별 기능
### 🏠 LandingPage
- 서비스 소개 및 로그인
- Google OAuth 연동
- 애니메이션 효과
### 🎮 OnboardingRangePage
- Phaser 게임 엔진 기반 음역대 측정
- 실시간 피치 분석
- 게임형 UI
### 🎵 RecordPage
- Web Audio API 실시간 녹음
- YouTube MR 연동
- 실시간 피치/볼륨 분석
- 3D 시각화
### 💿 AlbumCreatePage
- 3단계 앨범 생성 프로세스
- AI 커버 생성 (Canvas)
- 녹음 선택 및 편집
- 실시간 미리보기
### 🎪 AlbumDetailPage
- 3D 캐러셀 몰입 재생
- Three.js 기반 인터랙티브 UI
- 드래그/터치 네비게이션
### 👥 FeedPage
- 소셜 피드 (앨범 공유)
- 좋아요/댓글 시스템
- 팔로우 기능
### 👤 MyPage
- 개인 통계 및 관리
- 녹음/앨범 히스토리
- 프로필 편집
  
## 🚀 특별한 기술적 특징
### 🎤 Web Audio API 활용
- 실시간 오디오 처리
- 브라우저별 호환성 처리
- 메모리 누수 방지
### 🎪 3D 렌더링 (Three.js)
- React Three Fiber 활용
- GPU 가속 애니메이션
- 인터랙티브 3D UI
### 🎮 게임 엔진 (Phaser)
- 음역대 측정 게임
- 실시간 피치 분석
- 게임형 사용자 경험
### 🔄 상태 관리
- Zustand (클라이언트 상태)
- TanStack Query (서버 상태)
- 실시간 동기화
