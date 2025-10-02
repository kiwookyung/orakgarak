# 🎵 오락가락 (OrakGarak)

> **내 목소리에 딱 맞는 노래를 찾아보세요**  
> 빅데이터 기반 음성 분석과 맞춤형 노래 추천, 앨범 제작 & 공유 플랫폼

## 📋 프로젝트 개요

**오락가락(OrakGarak)** 은 사용자의 목소리를 분석하고,  
방대한 음악 데이터를 기반으로 음역대·음색에 맞는 **맞춤형 노래 추천**을 제공하는 **빅데이터 음악 추천 플랫폼**입니다.

추천을 중심으로 하되,

- **AI 음성 데모**를 통해 내 목소리의 특성을 체험하고
- **AI 앨범 커버 생성**으로 나만의 개성을 더할 수 있어  
  더 몰입감 있는 경험을 제공합니다.

### 🎯 주요 기능

- **📊 빅데이터 추천**: 음악 메타데이터 분석을 통한 개인화 추천
- **🎤 음성 체험**: 녹음 & AI 데모로 내 보컬 특성 확인
- **💿 앨범 제작**: 맞춤 곡으로 나만의 앨범 생성 & AI 커버 디자인
- **👥 소셜 피드**: 앨범 공유, 좋아요, 댓글로 소통
- **🎶 직관적 재생 경험**: 반응형 UI로 음악 감상 최적화

## 시연 영상
[![YouTube Video](https://img.youtube.com/vi/TZXWQVrrv0A/0.jpg)](https://www.youtube.com/watch?v=TZXWQVrrv0A)

## 🛠 기술 스택

<details>
<summary><span style="font-size: 1.3em; font-weight: bold;">Frontend </span></summary>
<div markdown="1">

- React 18 (SPA 프레임워크)
- TypeScript (정적 타입 지원)
- Vite (개발 서버 & 번들러)
- TailwindCSS (유틸리티 퍼스트 CSS)
- Material-UI (MUI) (UI 컴포넌트)
- Framer Motion (애니메이션)
- React Router (라우팅)
- Zustand (전역 상태 관리)
- Axios (API 연동)

</div>
</details>

<details>
<summary><span style="font-size: 1.3em; font-weight: bold;">Backend </span></summary>
<div markdown="1">

- Spring Boot 3.3.x (메인 프레임워크)
- Java 17
- Gradle (Kotlin DSL) + Maven (병행 가능)
- Spring Data JPA + QueryDSL (DB ORM & 동적 쿼리)
- MySQL 8.x (주 DB)
- Redis 7.x (캐싱, 세션 관리)
- Spring Security + JWT + OAuth2 (인증/보안)
- AWS S3 (앨범 커버/녹음 업로드)

</div>
</details>

<details>
<summary><span style="font-size: 1.3em; font-weight: bold;">Data & AI
</span></summary>
<div markdown="1">

- Python 3.9
- scikit-learn, pandas, numpy
- librosa (음성 분석)
- PyTorch / TensorFlow
- FastAPI (AI 모듈 서빙)
- Whisper API, FFmpeg (음성 처리)
- Gemini Image API (앨범 커버 생성)

</div>
</details>

<details>
<summary><span style="font-size: 1.3em; font-weight: bold;">Infra & DevOps
</span></summary>
<div markdown="1">

- Docker, Docker Compose
- Jenkins (CI/CD)
- AWS EC2, RDS, S3
- Nginx (Reverse Proxy)
- 협업: Jira, Notion, Mattermost

</div>
</details>

## 🏗 아키텍처

```
[Frontend: React+TS+Vite :5173]
|
v
[Backend: Spring Boot API :8080] --- [MySQL]
| |
| └── [Redis: 세션/캐시]
|
├── [AWS S3: 파일 저장]
└── [Data/AI: FastAPI :8000, ML 모델, Gemini Image]
```


## 🚀 실행 방법

### 1) 프론트엔드

```
bash
cd front
npm install
npm run dev

http://localhost:5173
```


### 2) 백엔드

```
cd back
./gradlew bootRun

http://localhost:8080
```


### 3) 데이터/AI 서버

```
cd data-ai
uvicorn main:app --host 0.0.0.0 --port 8000

http://localhost:8000
```


## 📄 API 문서

- Swagger: `http://localhost:8080/swagger-ui.html`

## 📊 DB & ERD

Wiki에서 확인 가능 → Database-Design

## 🖼 예시 스크린샷 & 데모

랜딩 페이지

음역대 분석 (보컬 테스트)

추천 결과 화면

앨범 제작 & AI 커버

피드 & 커뮤니티

## 👥 팀 정보

**SSAFY 13기 C103팀**  
프로젝트 기간: 2025년

- Frontend:
- Backend:
- Data/AI:
- Infra/DevOps:

## 📄 라이선스

이 프로젝트는 내부 학습/연구 목적이며 별도 라이선스 없이 사용되었습니다.


(서비스 구조 다이어그램 / 텍스트 설명)
