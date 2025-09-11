import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAlbumStore } from '../stores/albumStore';
import ImmersivePlaybackModal from '../components/album/ImmersivePlaybackModal';
import {
  Box,
  Container,
  Typography,
  Button,
  CardMedia,
  List,
  ListItem,
  Chip,
  IconButton,
  TextField,
  Paper,
  Avatar,
  Divider,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import {
  PlayArrow,
  ExpandMore,
  Favorite,
  Share,
  MoreVert,
  Send,
  ArrowBack,
  Delete,
  Edit,
} from '@mui/icons-material';

// 더미 앨범 데이터
const dummyAlbum = {
  id: '1',
  title: 'My Favorite Songs',
  description: '내가 좋아하는 노래들을 모아서 만든 첫 번째 앨범입니다. 감성적인 발라드부터 신나는 댄스곡까지 다양한 장르를 담았어요.',
  coverImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
  userId: 'user1',
  user: {
    nickname: '음악러버',
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
  },
  tracks: [
    { id: '1', title: '좋아', artist: '윤종신', score: 85, duration: '3:45', audioUrl: 'https://example.com/audio1.mp3' },
    { id: '2', title: '사랑은 은하수 다방에서', artist: '10cm', score: 92, duration: '4:12', audioUrl: 'https://example.com/audio2.mp3' },
    { id: '3', title: '밤편지', artist: '아이유', score: 88, duration: '3:23', audioUrl: 'https://example.com/audio3.mp3' },
  ],
  isPublic: true,
  tags: ['K-POP', '발라드', '감성', '힐링'],
  likeCount: 42,
  playCount: 156,
  commentCount: 12,
  createdAt: '2025-01-15T00:00:00Z',
  updatedAt: '2025-01-15T00:00:00Z',
};

// 더미 댓글 데이터
const dummyComments = [
  {
    id: '1',
    userId: 'user2',
    user: {
      nickname: '뮤직팬',
      profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    },
    content: '정말 좋은 선곡이네요! 특히 2번째 곡이 너무 감동적이었어요 👋',
    createdAt: '2025-01-13T00:00:00Z',
  },
  {
    id: '2',
    userId: 'user3',
    user: {
      nickname: '노래왕',
      profileImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    },
    content: '목소리가 정말 좋으시네요. 다음 앨범도 기대할게요!',
    createdAt: '2025-01-14T00:00:00Z',
  },
];

const AlbumDetailPage: React.FC = () => {
  const navigate = useNavigate();
  const { albumId } = useParams<{ albumId: string }>();
  const { getAlbumById } = useAlbumStore();
  const [album, setAlbum] = useState(dummyAlbum);
  const [comments, setComments] = useState(dummyComments);
  const [newComment, setNewComment] = useState('');
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [loading, setLoading] = useState(true);
  
  // 메뉴 상태
  const [albumMenuAnchor, setAlbumMenuAnchor] = useState<null | HTMLElement>(null);
  const [trackMenuAnchor, setTrackMenuAnchor] = useState<null | HTMLElement>(null);
  
  // 다이얼로그 상태
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [editTracksDialogOpen, setEditTracksDialogOpen] = useState(false);
  const [immersivePlaybackOpen, setImmersivePlaybackOpen] = useState(false);
  
  // 수록곡 편집 상태
  const [selectedTracks, setSelectedTracks] = useState<string[]>([]);
  const [allRecordings, setAllRecordings] = useState<typeof dummyAlbum.tracks>([]);

  // 앨범 데이터 로드
  useEffect(() => {
    const loadAlbum = () => {
      if (!albumId) {
        setLoading(false);
        return;
      }

      const albumData = getAlbumById(albumId);
      
      if (albumData) {
        // 앨범 데이터를 상세 페이지 형식으로 변환
        const albumDetailData = {
          id: albumData.id,
          title: albumData.title,
          description: albumData.description,
          coverImage: albumData.coverImage,
          userId: 'current-user',
          user: {
            nickname: '음악러버', // 실제로는 사용자 정보에서 가져와야 함
            profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
          },
          tracks: albumData.tracks || [
            // 기본 더미 데이터 (트랙이 없는 경우)
            { id: '1', title: '좋아', artist: '윤종신', score: 85, duration: '3:45' },
            { id: '2', title: '사랑은 은하수 다방에서', artist: '10cm', score: 92, duration: '4:12' },
            { id: '3', title: '밤편지', artist: '아이유', score: 88, duration: '3:23' },
          ],
          isPublic: albumData.isPublic,
          tags: ['K-POP', '발라드', '감성', '힐링'], // 실제로는 앨범 데이터에서 가져와야 함
          likeCount: albumData.likeCount,
          playCount: albumData.playCount,
          commentCount: 0, // 실제로는 댓글 데이터에서 가져와야 함
          createdAt: albumData.createdAt,
          updatedAt: albumData.createdAt,
        };
        
        setAlbum(albumDetailData);
        setLikeCount(albumData.likeCount);
      }
      
      setLoading(false);
    };

    loadAlbum();
  }, [albumId, getAlbumById]);

  const getScoreColor = (score: number) => {
    if (score >= 90) return '#4caf50';
    if (score >= 80) return '#2196f3';
    if (score >= 70) return '#ff9800';
    return '#f44336';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1일 전';
    if (diffDays < 7) return `${diffDays}일 전`;
    return date.toLocaleDateString('ko-KR');
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      const comment = {
        id: Date.now().toString(),
        userId: 'current-user',
        user: {
          nickname: '나',
          profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
        },
        content: newComment.trim(),
        createdAt: new Date().toISOString(),
      };
      setComments(prev => [comment, ...prev]);
      setNewComment('');
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleCommentSubmit();
    }
  };

  // 앨범 메뉴 핸들러
  const handleAlbumMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAlbumMenuAnchor(event.currentTarget);
  };

  const handleAlbumMenuClose = () => {
    setAlbumMenuAnchor(null);
  };

  const handleDeleteAlbum = () => {
    setDeleteDialogOpen(true);
    handleAlbumMenuClose();
  };

  // 수록곡 메뉴 핸들러
  const handleTrackMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setTrackMenuAnchor(event.currentTarget);
  };

  const handleTrackMenuClose = () => {
    setTrackMenuAnchor(null);
  };

  const handleEditTracks = () => {
    // 사용자의 모든 녹음 데이터 불러오기 (더미 데이터)
    const dummyRecordings = [
      {
        id: '1',
        title: '좋아',
        artist: '윤종신',
        score: 85,
        duration: '3:45',
        audioUrl: 'https://example.com/recording1.mp3',
      },
      {
        id: '2',
        title: '사랑은 은하수 다방에서',
        artist: '10cm',
        score: 78,
        duration: '4:12',
        audioUrl: 'https://example.com/recording2.mp3',
      },
      {
        id: '3',
        title: '밤편지',
        artist: '아이유',
        score: 92,
        duration: '3:23',
        audioUrl: 'https://example.com/recording3.mp3',
      },
      {
        id: '4',
        title: 'Spring Day',
        artist: 'BTS',
        score: 88,
        duration: '3:54',
        audioUrl: 'https://example.com/recording4.mp3',
      },
      {
        id: '5',
        title: 'Dynamite',
        artist: 'BTS',
        score: 90,
        duration: '3:19',
        audioUrl: 'https://example.com/recording5.mp3',
      },
    ];
    
    setAllRecordings(dummyRecordings);
    setSelectedTracks(album.tracks.map((track: typeof dummyAlbum.tracks[0]) => track.id));
    setEditTracksDialogOpen(true);
    handleTrackMenuClose();
  };

  // 앨범 삭제 확인
  const handleConfirmDelete = () => {
    // localStorage에서 앨범 삭제
    const savedAlbums = localStorage.getItem('myAlbums');
    if (savedAlbums) {
      const albums = JSON.parse(savedAlbums);
      const updatedAlbums = albums.filter((a: typeof dummyAlbum) => a.id !== albumId);
      localStorage.setItem('myAlbums', JSON.stringify(updatedAlbums));
    }
    
    setDeleteDialogOpen(false);
    navigate('/me/albums');
  };

  // 수록곡 편집 핸들러
  const handleTrackToggle = (trackId: string) => {
    setSelectedTracks(prev => 
      prev.includes(trackId) 
        ? prev.filter(id => id !== trackId)
        : [...prev, trackId]
    );
  };

  const handleSelectAllTracks = () => {
    setSelectedTracks(allRecordings.map(recording => recording.id));
  };

  const handleDeselectAllTracks = () => {
    setSelectedTracks([]);
  };

  const handleSaveTracks = () => {
    // 선택된 녹음들을 트랙 형식으로 변환
    const updatedTracks = allRecordings
      .filter(recording => selectedTracks.includes(recording.id))
      .map(recording => ({
        id: recording.id,
        title: recording.title,
        artist: recording.artist,
        score: recording.score,
        duration: recording.duration,
        audioUrl: recording.audioUrl,
      }));
    
    // localStorage에서 앨범 업데이트
    const savedAlbums = localStorage.getItem('myAlbums');
    if (savedAlbums) {
      const albums = JSON.parse(savedAlbums);
      const updatedAlbums = albums.map((a: typeof dummyAlbum) => 
        a.id === albumId ? { ...a, tracks: updatedTracks, trackCount: updatedTracks.length } : a
      );
      localStorage.setItem('myAlbums', JSON.stringify(updatedAlbums));
    }
    
    // 현재 앨범 상태 업데이트
    setAlbum(prev => ({ ...prev, tracks: updatedTracks }));
    setEditTracksDialogOpen(false);
  };

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 4, textAlign: 'center' }}>
        <Typography variant="h6">앨범을 불러오는 중...</Typography>
      </Container>
    );
  }

  if (!album || album.id !== albumId) {
  return (
      <Container maxWidth="lg" sx={{ py: 4, textAlign: 'center' }}>
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate(-1)}
          sx={{ mb: 3, color: '#666' }}
        >
          뒤로가기
        </Button>
        <Typography variant="h6" color="text.secondary">
          앨범을 찾을 수 없습니다.
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* 뒤로가기 버튼 */}
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate(-1)}
          sx={{ mb: 3, color: '#666' }}
        >
          뒤로가기
        </Button>

        {/* 앨범 정보 */}
        <Box sx={{ display: 'flex', gap: 3, mb: 4 }}>
          <CardMedia
            component="img"
            sx={{ width: 200, height: 200, borderRadius: 2 }}
            image={album.coverImage}
            alt={album.title}
          />
          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
              {album.title}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <Avatar src={album.user.profileImage} sx={{ width: 32, height: 32 }} />
        <Typography variant="body1" color="text.secondary">
                {album.user.nickname}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {formatDate(album.createdAt)}
              </Typography>
            </Box>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              ♫ {album.tracks.length}곡 • {album.tracks.reduce((total, track) => {
                const [minutes, seconds] = track.duration.split(':').map(Number);
                return total + minutes * 60 + seconds;
              }, 0) / 60}분
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
              {album.tags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  sx={{
                    backgroundColor: '#f0f0f0',
                    color: '#666',
                    fontSize: '0.75rem',
                  }}
                />
              ))}
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Button
                variant="contained"
                startIcon={<PlayArrow />}
                sx={{
                  backgroundColor: '#2c2c2c',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#1a1a1a',
                  },
                }}
              >
                ▷ 전체 재생
              </Button>
              <Button
                variant="outlined"
                startIcon={<ExpandMore />}
                onClick={() => setImmersivePlaybackOpen(true)}
                sx={{
                  borderColor: '#2c2c2c',
                  color: '#2c2c2c',
                  '&:hover': {
                    borderColor: '#1a1a1a',
                    backgroundColor: '#f5f5f5',
                  },
                }}
              >
                몰입 재생
              </Button>
              <IconButton onClick={handleLike} sx={{ color: isLiked ? '#f44336' : '#666' }}>
                <Favorite />
              </IconButton>
              <Typography variant="body2" color="text.secondary">
                {likeCount}
              </Typography>
              <IconButton sx={{ color: '#666' }}>
                <Share />
              </IconButton>
              <Typography variant="body2" color="text.secondary">
                공유
              </Typography>
              <IconButton 
                sx={{ color: '#666' }}
                onClick={handleAlbumMenuOpen}
              >
                <MoreVert />
              </IconButton>
            </Box>
          </Box>
        </Box>

        {/* 앨범 설명 */}
        <Paper sx={{ p: 3, mb: 4 }}>
          <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
            {album.description}
          </Typography>
        </Paper>

        {/* 수록곡 */}
        <Paper sx={{ p: 3, mb: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, display: 'flex', alignItems: 'center' }}>
              ♪ 수록곡
            </Typography>
            <IconButton 
              sx={{ color: '#666' }}
              onClick={handleTrackMenuOpen}
            >
              <MoreVert />
            </IconButton>
          </Box>
          <List>
            {album.tracks.map((track, index) => (
              <ListItem key={track.id} sx={{ py: 1 }}>
                <Box sx={{ flex: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 0.5 }}>
                    <Typography variant="body2" color="text.secondary" sx={{ minWidth: 20 }}>
                      {index + 1}.
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      {track.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      - {track.artist}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: getScoreColor(track.score),
                        fontWeight: 600,
                      }}
                    >
                      {track.score}점
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {track.duration}
                    </Typography>
                  </Box>
                </Box>
                <IconButton size="small">
                  <PlayArrow sx={{ color: '#666' }} />
                </IconButton>
              </ListItem>
            ))}
          </List>
        </Paper>

        {/* 댓글 섹션 */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
            댓글 ({comments.length})
          </Typography>
          
          {/* 댓글 작성 */}
          <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
            <TextField
              fullWidth
              placeholder="이 앨범에 대한 생각을 남겨보세요..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              onKeyPress={handleKeyPress}
              multiline
              maxRows={3}
            />
            <Button
              variant="contained"
              startIcon={<Send />}
              onClick={handleCommentSubmit}
              disabled={!newComment.trim()}
              sx={{
                backgroundColor: '#2c2c2c',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#1a1a1a',
                },
                '&:disabled': {
                  backgroundColor: '#e0e0e0',
                  color: '#9e9e9e',
                },
              }}
            >
              댓글 작성
            </Button>
          </Box>

          <Divider sx={{ mb: 2 }} />

          {/* 댓글 목록 */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {comments.map((comment) => (
              <Box key={comment.id} sx={{ display: 'flex', gap: 2 }}>
                <Avatar src={comment.user.profileImage} sx={{ width: 40, height: 40 }} />
                <Box sx={{ flex: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      {comment.user.nickname}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {formatDate(comment.createdAt)}
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ lineHeight: 1.5 }}>
                    {comment.content}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Paper>

        {/* 앨범 메뉴 */}
        <Menu
          anchorEl={albumMenuAnchor}
          open={Boolean(albumMenuAnchor)}
          onClose={handleAlbumMenuClose}
        >
          <MenuItem onClick={handleDeleteAlbum} sx={{ color: '#f44336' }}>
            <Delete sx={{ mr: 1 }} />
            이 앨범 삭제
          </MenuItem>
        </Menu>

        {/* 수록곡 메뉴 */}
        <Menu
          anchorEl={trackMenuAnchor}
          open={Boolean(trackMenuAnchor)}
          onClose={handleTrackMenuClose}
        >
          <MenuItem onClick={handleEditTracks}>
            <Edit sx={{ mr: 1 }} />
            수록곡 편집
          </MenuItem>
        </Menu>

        {/* 앨범 삭제 확인 다이얼로그 */}
        <Dialog
          open={deleteDialogOpen}
          onClose={() => setDeleteDialogOpen(false)}
        >
          <DialogTitle>앨범 삭제</DialogTitle>
          <DialogContent>
            <Typography>
              정말로 이 앨범을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDeleteDialogOpen(false)}>
              취소
            </Button>
            <Button 
              onClick={handleConfirmDelete} 
              color="error"
              variant="contained"
            >
              삭제
            </Button>
          </DialogActions>
        </Dialog>

        {/* 수록곡 편집 다이얼로그 */}
        <Dialog
          open={editTracksDialogOpen}
          onClose={() => setEditTracksDialogOpen(false)}
          maxWidth="md"
          fullWidth
        >
          <DialogTitle>
            수록곡 편집
            <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
              <Button size="small" onClick={handleSelectAllTracks}>
                전체 선택
              </Button>
              <Button size="small" onClick={handleDeselectAllTracks}>
                전체 해제
              </Button>
            </Box>
          </DialogTitle>
          <DialogContent>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              내 녹음 목록에서 선택하세요
            </Typography>
            <List>
              {allRecordings.map((recording, index) => {
                const duration = recording.duration;
                return (
                  <ListItem key={recording.id} sx={{ py: 1 }}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={selectedTracks.includes(recording.id)}
                          onChange={() => handleTrackToggle(recording.id)}
                        />
                      }
                      label={
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, ml: 1 }}>
                          <Typography variant="body2" color="text.secondary" sx={{ minWidth: 20 }}>
                            {index + 1}.
                          </Typography>
                          <Typography variant="body1" sx={{ fontWeight: 500 }}>
                            {recording.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            - {recording.artist}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: getScoreColor(recording.score),
                              fontWeight: 600,
                            }}
                          >
                            {recording.score}점
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {duration}
        </Typography>
      </Box>
                      }
                      sx={{ width: '100%' }}
                    />
                  </ListItem>
                );
              })}
            </List>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setEditTracksDialogOpen(false)}>
              취소
            </Button>
            <Button 
              onClick={handleSaveTracks} 
              variant="contained"
            >
              저장
            </Button>
          </DialogActions>
        </Dialog>

        {/* 몰입 재생 모달 */}
        <ImmersivePlaybackModal
          open={immersivePlaybackOpen}
          onClose={() => setImmersivePlaybackOpen(false)}
          albumData={{
            id: album.id,
            title: album.title,
            tracks: album.tracks.map((track: typeof dummyAlbum.tracks[0]) => ({
              id: track.id,
              title: track.title,
              audioUrl: track.audioUrl,
              duration: track.duration,
            })),
            coverImage: album.coverImage,
            description: album.description,
          }}
        />
    </Container>
  );
};

export default AlbumDetailPage;