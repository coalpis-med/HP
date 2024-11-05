import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import Link from 'next/link';

interface FooterProps {
  currentYear: number;
}

export const Footer: React.FC<FooterProps> = ({ currentYear }) => {
  return (
    <footer className="bg-zinc-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">ABOUT</h3>
            <Link href="/about">
              <p className="hover:text-blue-500 transition-colors">会社概要</p>
            </Link>
          </div>
          <div>
            <h3 className="font-bold mb-4">WORKS</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/works/3d-modeling">
                  <p className="hover:text-blue-500 transition-colors">3Dモデリング</p>
                </Link>
              </li>
              <li>
                <Link href="/works/vr-furniture">
                  <p className="hover:text-blue-500 transition-colors">VR家具配置システム</p>
                </Link>
              </li>
              <li>
                <Link href="/works/360-content">
                  <p className="hover:text-blue-500 transition-colors">高画質360°3Dコンテンツ</p>
                </Link>
              </li>
              <li>
                <Link href="/works/other-works">
                  <p className="hover:text-blue-500 transition-colors">その他</p>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">NEWS</h3>
            <Link href="/news">
              <p className="hover:text-blue-500 transition-colors">最新情報</p>
            </Link>
          </div>
          <div>
            <h3 className="font-bold mb-4">CONTACT</h3>
            <Link href="/contact">
              <p className="hover:text-blue-500 transition-colors">問い合わせ</p>
            </Link>
          </div>
        </div>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook className="h-6 w-6 hover:text-blue-500 transition-colors" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter className="h-6 w-6 hover:text-blue-400 transition-colors" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram className="h-6 w-6 hover:text-pink-500 transition-colors" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <Youtube className="h-6 w-6 hover:text-red-500 transition-colors" />
          </a>
        </div>
        <div className="text-center text-sm text-zinc-400">
          <p>© {currentYear} COLAPIS All Rights Reserved.</p>
          <p>《Web Design:Hakusan Tech》</p>
        </div>
      </div>
    </footer>
  );
};