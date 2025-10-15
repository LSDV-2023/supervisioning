const _loaderStart = Date.now();

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('myButton');
    const message = document.getElementById('message');
    let clickCount = 0;

document.addEventListener('DOMContentLoaded', function() {
    const praiseButton = document.getElementById('praiseButton');
    const counterDisplay = document.querySelector('.count');
    const messageZone = document.getElementById('messageZone');
    const achievementCards = document.querySelectorAll('.achievement-card');
    
    let praiseCount = 0;
    
    // Messages épiques pour célébrer Rémi
    const epicMessages = [
        "🌟 La galaxie entière célèbre Rémi ! 🌟",
        "💰 Sa fortune illumine l'univers ! 💰",
        "👑 Gloire à Rémi le Magnifique ! 👑",
        "🚀 Même les étoiles s'inclinent devant lui ! 🚀",
        "💎 Son excellence dépasse l'imagination ! 💎",
        "⚡ Rémi, le plus grand des Zinzins ! ⚡",
        "🎯 Personne ne peut égaler sa grandeur ! 🎯",
        "🌈 L'univers tout entier l'admire ! 🌈",
        "🏆 Champion cosmique incontesté ! 🏆",
        "✨ Sa légende traverse les dimensions ! ✨",
        "🎪 Rémi, le prodige intergalactique ! 🎪",
        "🎨 Son style est légendaire dans 47 galaxies ! 🎨",
        "🎵 Les chants célèbrent sa générosité ! 🎵",
        "🔥 Son aura illumine le cosmos ! 🔥",
        "💫 Rémi transcende la réalité elle-même ! 💫"
    ];
    
    // Messages spéciaux pour les paliers
    const milestoneMessages = {
        10: "🎉 10 louanges ! Les Zinzins sont ravis ! 🎉",
        25: "🌟 25 louanges ! Candy applaudit ! 🤖",
        50: "💰 50 louanges ! La fortune de Rémi augmente ! 💰",
        100: "👑 100 louanges ! Etno proclame Rémi Empereur ! 👽",
        150: "🚀 150 louanges ! Gorgious construit une statue d'or ! 🐙",
        200: "⚡ 200 louanges ! Stereo compose un hymne ! ⚡",
        300: "💎 300 louanges ! L'UNIVERS ENTIER S'INCLINE ! 💎",
        500: "🌈 500 LOUANGES !!! RÉMI EST UN DIEU VIVANT !!! 🌈",
        1000: "🔥🔥🔥 1000 LOUANGES !!! L'APOTHÉOSE COSMIQUE !!! 🔥🔥🔥"
    };
    
    // Fonction pour afficher un message
    function showMessage(message) {
        messageZone.textContent = message;
        messageZone.style.transform = 'scale(1.2)';
        messageZone.style.color = getRandomColor();
        
        setTimeout(() => {
            messageZone.style.transform = 'scale(1)';
        }, 300);
    }
    
    // Fonction pour obtenir une couleur aléatoire
    function getRandomColor() {
        const colors = ['#00e5ff', '#ff006e', '#ffd700', '#00ff88', '#ff00ff', '#ffaa00'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
    // Fonction pour créer des particules
    function createParticles(x, y) {
        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            particle.style.width = '10px';
            particle.style.height = '10px';
            particle.style.borderRadius = '50%';
            particle.style.backgroundColor = getRandomColor();
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '9999';
            particle.textContent = ['💰', '💎', '⭐', '✨', '👑'][Math.floor(Math.random() * 5)];
            particle.style.fontSize = '20px';
            
            document.body.appendChild(particle);
            
            const angle = (Math.PI * 2 * i) / 15;
            const velocity = 100 + Math.random() * 100;
            const vx = Math.cos(angle) * velocity;
            const vy = Math.sin(angle) * velocity;
            
            let posX = x;
            let posY = y;
            let life = 1;
            
            const animate = () => {
                life -= 0.02;
                posX += vx * 0.016;
                posY += vy * 0.016 + 2; // Gravité
                
                particle.style.left = posX + 'px';
                particle.style.top = posY + 'px';
                particle.style.opacity = life;
                particle.style.transform = `scale(${life})`;
                
                if (life > 0) {
                    requestAnimationFrame(animate);
                } else {
                    particle.remove();
                }
            };
            
            animate();
        }
    }
    
    // Fonction pour faire trembler l'écran
    function screenShake() {
        const tvScreen = document.querySelector('.tv-screen');
        tvScreen.style.animation = 'none';
        setTimeout(() => {
            tvScreen.style.animation = 'shake 0.5s';
        }, 10);
    }
    
    // Animation de shake
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translate(0, 0); }
            10%, 30%, 50%, 70%, 90% { transform: translate(-5px, 5px); }
            20%, 40%, 60%, 80% { transform: translate(5px, -5px); }
        }
    `;
    document.head.appendChild(style);
    
    // Événement du bouton de célébration
    praiseButton.addEventListener('click', function(e) {
        praiseCount++;
        counterDisplay.textContent = praiseCount;
        
        // Animation du compteur
        counterDisplay.style.transform = 'scale(1.5) rotate(360deg)';
        setTimeout(() => {
            counterDisplay.style.transform = 'scale(1) rotate(0deg)';
        }, 500);
        
        // Créer des particules à la position du clic
        createParticles(e.clientX, e.clientY);
        
        // Message épique
        if (milestoneMessages[praiseCount]) {
            showMessage(milestoneMessages[praiseCount]);
            screenShake();
            
            // Effet spécial pour les grands paliers
            if (praiseCount >= 100) {
                document.body.style.animation = 'rainbow 2s linear';
                setTimeout(() => {
                    document.body.style.animation = '';
                }, 2000);
            }
        } else {
            const randomMessage = epicMessages[Math.floor(Math.random() * epicMessages.length)];
            showMessage(randomMessage);
        }
        
        // Animation du bouton
        praiseButton.style.transform = 'scale(0.9)';
        setTimeout(() => {
            praiseButton.style.transform = 'scale(1)';
        }, 100);
    });
    
    // Animation des cartes d'achievements au survol
    achievementCards.forEach((card, index) => {
        card.addEventListener('mouseenter', function() {
            this.style.animation = `cardFloat 0.6s ease-in-out`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.animation = '';
        });
        
        // Animation d'apparition en cascade
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    // Animation des membres de l'équipage
    const crewMembers = document.querySelectorAll('.zinzin-member');
    crewMembers.forEach((member, index) => {
        member.addEventListener('click', function() {
            const messages = {
                0: "🤖 Candy : 'Rémi est génial, bip boop !'",
                1: "👽 Etno : 'Rémi mérite tous les trésors de l'univers !'",
                2: "🐙 Gorgious : 'La beauté de Rémi est incomparable !'",
                3: "⚡ Stereo : 'Rémi rock ! Rémi au top !'"
            };
            showMessage(messages[index]);
            this.style.transform = 'scale(1.5) rotate(360deg)';
            setTimeout(() => {
                this.style.transform = 'scale(1) rotate(0deg)';
            }, 500);
        });
    });
    
    // Effet de particules cosmiques automatique
    setInterval(() => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        createCosmicSparkle(x, y);
    }, 2000);
    
    function createCosmicSparkle(x, y) {
        const sparkle = document.createElement('div');
        sparkle.style.position = 'fixed';
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        sparkle.style.fontSize = '20px';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '999';
        sparkle.textContent = '✨';
        sparkle.style.animation = 'sparkle 2s ease-out forwards';
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 2000);
    }
    
    // Animation sparkle
    const sparkleStyle = document.createElement('style');
    sparkleStyle.textContent = `
        @keyframes sparkle {
            0% { opacity: 0; transform: scale(0) rotate(0deg); }
            50% { opacity: 1; transform: scale(1.5) rotate(180deg); }
            100% { opacity: 0; transform: scale(0) rotate(360deg); }
        }
        
        @keyframes cardFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
        }
    `;
    document.head.appendChild(sparkleStyle);
    
    // Message de bienvenue
    setTimeout(() => {
        showMessage("🚀 Bienvenue dans l'univers de Rémi le Magnifique ! 🚀");
    }, 1000);
    
    // Easter egg : Konami Code
    let konamiCode = [];
    const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    
    document.addEventListener('keydown', function(e) {
        konamiCode.push(e.key);
        if (konamiCode.length > 10) konamiCode.shift();
        
        if (konamiCode.join(',') === konamiSequence.join(',')) {
            showMessage("🎮 CODE ZINZIN ACTIVÉ ! RÉMI EST MAINTENANT 1000x PLUS RICHE ! 💰💰💰");
            praiseCount += 1000;
            counterDisplay.textContent = praiseCount;
            
            for (let i = 0; i < 50; i++) {
                setTimeout(() => {
                    createParticles(
                        Math.random() * window.innerWidth,
                        Math.random() * window.innerHeight
                    );
                }, i * 50);
            }
        }
    });
    
    console.log("🚀 Les Zinzins de l'Espace sont opérationnels !");
    console.log("💰 Rémi approuve ce site incroyable !");
    console.log("✨ Astuce : Essayez le Konami Code pour un easter egg !");
});

// Hide the loader after all resources are loaded, but keep it visible at least 3s
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    if (!loader) return;

    const minDuration = 3000; // ms
    const elapsed = Date.now() - _loaderStart;
    const wait = Math.max(0, minDuration - elapsed);

    setTimeout(() => {
        // trigger fade-out
        loader.classList.add('hidden');
        // remove from DOM after CSS transition (400ms) + buffer
        setTimeout(() => {
            if (loader && loader.parentNode) loader.parentNode.removeChild(loader);
        }, 500);
    }, wait);
});

// Hide the loader after all resources are loaded, but keep it visible at least 3s
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    if (!loader) return;

    const minDuration = 3000; // ms
    const elapsed = Date.now() - _loaderStart;
    const wait = Math.max(0, minDuration - elapsed);

    setTimeout(() => {
        // trigger fade-out
        loader.classList.add('hidden');
        // remove from DOM after CSS transition (400ms) + buffer
        setTimeout(() => {
            if (loader && loader.parentNode) loader.parentNode.removeChild(loader);
        }, 500);
    }, wait);
});
