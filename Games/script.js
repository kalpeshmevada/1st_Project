document.addEventListener('DOMContentLoaded', () => {
  const showMoreBtn = document.getElementById('show-more-btn');
  const gameContainer = document.querySelector('.games-section-container');
  const allGamesCards = gameContainer.querySelectorAll('.game-card');
  const gamePerBatch = 15;
  let currentlyshown = gamePerBatch;

  for (let i = gamePerBatch; i < allGamesCards.length; i++) {
    allGamesCards[i].style.display = 'none';
  }

  showMoreBtn.addEventListener('click', () => {
    const nextBatchEnd = currentlyshown + gamePerBatch;

    for (let i = currentlyshown; i < nextBatchEnd && i < allGamesCards.length; i++) {
      allGamesCards[i].style.display = 'block';
    }

    currentlyshown = gamePerBatch;

    if (currentlyshown => allGamesCards.length) {
      showMoreBtn.style.display = 'none';
    }
  });
});