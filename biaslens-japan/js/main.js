// BiasLens Japan - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // タブ切り替え機能
    initTabs();
    
    // 投票機能
    initVoting();
});

// タブ切り替え
function initTabs() {
    const tabs = document.querySelectorAll('.tab');
    const panels = document.querySelectorAll('.content-panel');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.dataset.tab;
            
            // タブのアクティブ状態を切り替え
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // パネルの表示を切り替え
            panels.forEach(panel => {
                panel.classList.remove('active');
                if (panel.id === targetTab) {
                    panel.classList.add('active');
                }
            });
        });
    });
}

// 投票機能
function initVoting() {
    const voteButtons = document.querySelectorAll('.vote-btn');
    
    voteButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const vote = this.dataset.vote;
            
            // 投票済みの視覚的フィードバック
            voteButtons.forEach(b => {
                b.style.opacity = '0.5';
                b.style.transform = 'none';
            });
            this.style.opacity = '1';
            this.style.transform = 'scale(1.05)';
            
            // アラート表示（実際はサーバー送信）
            const labels = {
                'conservative': '保守派',
                'progressive': '進歩派',
                'moderate': '中道派'
            };
            
            alert(`${labels[vote]}に投票しました！\n\n※これはデモです。実際の投票機能はバックエンド連携が必要です。`);
        });
    });
}

// スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
