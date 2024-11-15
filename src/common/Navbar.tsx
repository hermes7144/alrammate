import React from 'react';
import { useAuthStore } from '../store/authStore';
import { login, logout } from '../api/auth';
import { useNavigate } from 'react-router-dom';

 export default function Navbar() {
  const user = useAuthStore((state) => state.user);
  const authStatus = useAuthStore((state) => state.authStatus);
  const navigate = useNavigate();

  return (
    <header className='navbar flex justify-between font-semibold bg-white fixed top-0 left-0 right-0 z-10 border-b border-gray-300'>
      <div onClick={() => navigate('/')} className='flex items-center gap-1 text-brand'>
        <h1 className='tracking-tighter text-3xl font-semibold cursor-pointer'>알림메이트</h1>
      </div>
      <div onClick={() => navigate('/races')}>레이스</div>
      <nav className="flex items-center gap-4">
        {authStatus === 'loading' ? (
          '로딩중...'
        ) : authStatus === 'authenticated' ? (
          <>
            <span>{user?.displayName}</span>
            <button onClick={logout}>로그아웃</button>
          </>
        ) : authStatus === 'unauthenticated' ? (
          <button onClick={login}>로그인</button>
        ) : (
          <span>에러 발생</span>
        )}
      </nav>
    </header>
  );
}