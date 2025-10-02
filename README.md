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

## 🎬시연 영상
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

<img width="1772" height="1207" alt="스크린샷 2025-10-01 155938" src="https://github.com/user-attachments/assets/dbe1da27-849d-432f-a28b-7d68ebb0be1b" />

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

<img width="1378" height="766" alt="스크린샷 2025-10-02 094916" src="https://github.com/user-attachments/assets/77c20652-5a3d-402a-9fff-433d16b6f924" />


## 👥 팀 정보

**SSAFY 13기 C103팀**  
프로젝트 기간: 2025.08.18~2025.09.29

- Frontend: 기우경, 이승민 ,이혜민
- Backend: 신진우, 범 수, 이혜민
- Data/AI: 신진우, 강민정
- Infra/DevOps: 신진우

## 📄 라이선스

이 프로젝트는 내부 학습/연구 목적이며 별도 라이선스 없이 사용되었습니다.

## 🚨 주요 트러블슈팅 및 해결 과정

- Web Audio API 관련 문제들
  - 브라우저 호환성: Safari의 webkitAudioContext 지원
  - 사용자 제스처 필요: 브라우저 정책으로 인해 사용자 상호작용 후 AudioContext 활성화 필요
  - 메모리 누수 방지: audioContext.close() 호출로 리소스 정리
- 토큰 갱신 및 API 인증 처리
  - 큐 시스템 도입: 토큰 갱신 중 대기 중인 요청들을 큐에 저장
  - 중복 요청 방지: isRefreshing 플래그로 동시 갱신 방지
  - 자동 재시도: 갱신된 토큰으로 원래 요청 자동 재시도
- 3D 캐러셀 성능 최적화
  - 메모이제이션: useMemo로 카드 데이터 최적화
  - CSS Transform 활용: GPU 가속을 통한 부드러운 애니메이션
  - 이벤트 최적화: 드래그/터치 이벤트의 throttle 적용
- 상태 관리 복잡성
  - 명확한 역할 분담: Zustand(클라이언트) vs TanStack Query(서버)
  - 상태 동기화: Query 성공 시 Zustand 상태 업데이트
  - 캐싱 전략: 적절한 staleTime과 cacheTime 설정
- 오디오 파일 처리 및 재생
  - CORS 설정: 외부 URL에 대한 적절한 crossOrigin 설정
  - 에러 핸들링: 다양한 오디오 로딩 실패 시나리오 처리
  - 상태 관리: 로딩, 재생, 에러 상태의 명확한 구분


## 💡 주요 배운 점 및 성장
### 1) 기술적 성장
- Web Audio API 마스터: 실시간 오디오 처리와 분석
- 성능 최적화: 메모이제이션, 가상화, GPU 가속 활용
- 상태 관리: 복잡한 애플리케이션의 상태 관리 전략

### 2) 문제 해결 능력
- 디버깅 스킬: 브라우저 개발자 도구 활용한 성능 분석
- 크로스 브라우저 호환성: 다양한 브라우저에서의 테스트와 대응
- 사용자 경험 중심: 기술적 완성도보다 사용자 경험 우선

### 3) 협업 및 커뮤니케이션
- 백엔드와의 협업: API 설계와 데이터 흐름 조율
- 디자인 시스템: 일관된 UI/UX 구현
- 문서화: 코드 주석과 README 작성의 중요성

### 4) 프로젝트 관리
- 기능 우선순위: MVP와 추가 기능의 구분
- 점진적 개발: 단계별 기능 구현과 테스트
- 사용자 피드백: 실제 사용자 테스트를 통한 개선

---

## 마치며..
이 프로젝트를 통해 실제 사용자가 사용하는 웹 애플리케이션을 처음부터 끝까지 개발하는 경험을 얻었고, 특히 오디오 처리, 3D 렌더링, 복잡한 상태 관리 등 고난도 기술들을 실무에서 적용해볼 수 있는 소중한 경험이었습니다
