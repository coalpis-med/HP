'use client';
import React, { useState, useEffect } from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  const [currentYear, setCurrentYear] = useState(2024);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">ABOUT</h3>
            <Link href="/about" className="hover:text-blue-400 transition-colors">
              会社概要
            </Link>
          </div>
          <div>
            <h3 className="font-bold mb-4">WORKS</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/works/3d-modeling" className="hover:text-blue-400 transition-colors">
                  3Dモデリング
                </Link>
              </li>
              <li>
                <Link href="/works/vr-furniture" className="hover:text-blue-400 transition-colors">
                  VR家具配置システム
                </Link>
              </li>
              <li>
                <Link href="/works/360-content" className="hover:text-blue-400 transition-colors">
                  高画質360°3Dコンテンツ
                </Link>
              </li>
              <li>
                <Link href="/works/other-works" className="hover:text-blue-400 transition-colors">
                  その他
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">NEWS</h3>
            <Link href="/news" className="hover:text-blue-400 transition-colors">
              最新情報
            </Link>
          </div>
          <div>
            <h3 className="font-bold mb-4">CONTACT</h3>
            <Link href="/contact" className="hover:text-blue-400 transition-colors">
              問い合わせ
            </Link>
          </div>
        </div>
        
        <div className="text-center text-sm text-gray-400">
          <p>© {currentYear} COLAPIS All Rights Reserved.</p>
          <p>《Web Design:Hakusan Tech》</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;