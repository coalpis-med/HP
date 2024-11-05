import React from 'react';

const Page: React.FC = () => {
    return (
        <div className="container mx-auto min-h-screen bg-gray-900 text-white p-8 space-y-12 pt-24">
            <section className="text-center space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-indigo-400">360° 3D コンテンツ</h1>
                <p className="text-lg md:text-2xl text-gray-300">没入感溢れる8K 3Dの映像を体験しよう</p>
                <p className="text-sm md:text-lg text-gray-400">
                    VR機器で再生した際も、まるでその場にいるかのような臨場感のある映像を楽しめます。
                </p>
            </section>

            <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl md:text-3xl font-semibold text-indigo-300 mb-4">実際のデータ</h2>
                <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-semibold text-white">6K 3D 360° 映像</h3>
                    <p className="text-gray-400 text-sm md:text-base">
                        高解像度の6Kで、360°3D映像を実現。臨場感たっぷりの映像で仮想世界を体験できます。
                    </p>
                    <a
                        href="https://www.youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-md transition"
                    >
                        動画を見る（YouTube）
                    </a>
                </div>
            </section>

            <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl md:text-3xl font-semibold text-indigo-300 mb-4">360° LIVE 配信</h2>
                <p className="text-gray-400 text-sm md:text-base">
                    リアルタイムで360°映像を配信し、視聴者を新しい体験の世界へと誘います。
                </p>
                <a
                    href="#"
                    className="inline-block mt-2 bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-md transition"
                >
                    さらに詳しく
                </a>
            </section>
        </div>
    );
};

export default Page;
