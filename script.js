const timerDisplay = document.querySelector('.timer-display');
const startButton = document.querySelector('.start-button');
const stopButton = document.querySelector('.stop-button');
const resetButton = document.querySelector('.reset-button');

let timerInterval; // متغير لتخزين معرف مؤقت الساعة

// دالة لتحويل الوقت من ثواني إلى ساعات ودقائق وثواني
function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// دالة لتحديث واجهة المستخدم لعرض الوقت
function updateTimerDisplay(seconds) {
  timerDisplay.textContent = formatTime(seconds);
}

// دالة بدء الساعة
function startTimer() {
  let seconds = 0;

  updateTimerDisplay(seconds);

  timerInterval = setInterval(() => {
    seconds++;
    updateTimerDisplay(seconds);
  }, 1000);
}

// دالة إيقاف الساعة
function stopTimer() {
  clearInterval(timerInterval);
}

// دالة إعادة تعيين الساعة
function resetTimer() {
  stopTimer();
  updateTimerDisplay(0);
}

// تعيين الأحداث للأزرار
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
