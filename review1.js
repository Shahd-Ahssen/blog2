const header = document.querySelector('header');
let lastScrollY = window.scrollY; // حفظ مكان التمرير الأخير

// التحقق من حالة التمرير
window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    // تغيير الخلفية بناءً على مكان التمرير
    if (currentScrollY > 50) {
        header.classList.add('scrolled'); // إضافة خلفية عند التمرير
    } else {
        header.classList.remove('scrolled'); // إزالة الخلفية عند العودة لأعلى الصفحة
    }

    // التحكم في ظهور/اختفاء الـ header عند التمرير لأعلى أو لأسفل
    if (currentScrollY > lastScrollY) {
        // إذا كنا نمر للأسفل
        header.classList.add('hide'); // إخفاء الـ header
        header.classList.remove('show');
    } else {
        // إذا كنا نمر للأعلى
        header.classList.add('show'); // إظهار الـ header
        header.classList.remove('hide');
    }

    lastScrollY = currentScrollY; // تحديث آخر مكان للتمرير
});






// البحث عند الضغط على زر البحث
const searchInput = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");

searchButton.addEventListener("click", () => {
  const query = searchInput.value.trim();
  if (query) {
    alert(`You searched for: ${query}`);
    // هنا يمكن توجيه المستخدم إلى صفحة البحث باستخدام: location.href
  } else {
    alert("Please enter something to search!");
  }
});
// إضافة تعليق ديناميكي
const commentsSection = document.querySelector(".comments-section");
const addCommentBtn = document.createElement("button");

// تغيير النص داخل الزر
addCommentBtn.textContent = "Add Comment";
addCommentBtn.style.margin = "10px auto";
addCommentBtn.style.display = "block";

// إضافة الفئة الخاصة بالزر
addCommentBtn.classList.add('add-comment-btn');

// إضافة الزر إلى القسم الخاص بالتعليقات
commentsSection.appendChild(addCommentBtn);

// إضافة الحدث عند الضغط على الزر
addCommentBtn.addEventListener("click", () => {
  const commentText = prompt("Enter your comment:");
  if (commentText) {
    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");
    commentDiv.innerHTML = `<p><strong>You:</strong> ${commentText}</p>`;
    commentsSection.appendChild(commentDiv);
  }
});
const overlay = document.querySelector('.overlay');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    overlay.style.transform = `translate(-50%, calc(-50% + ${scrollY / 2}px))`;
});

// تحديد جميع الكروت داخل المعرض
const landmarks = document.querySelectorAll('.landmark');

// إعداد الـ IntersectionObserver لمراقبة الكروت عند التمرير
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');  // إضافة فئة visible للتحريك عند الدخول
      observer.unobserve(entry.target);  // إيقاف المراقبة بعد ظهور الكرت
    }
  });
}, {
  threshold: 0  // نبدأ في مراقبة الكرت بمجرد دخوله في نطاق الرؤية
});

// مراقبة جميع الكروت
landmarks.forEach(landmark => {
  observer.observe(landmark);
});


// الحصول على العنصر footer
const footer = document.querySelector('.footer');

// إضافة تأثير الخلفية عند التمرير
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY; // سرعة التمرير في الـ Y

    // تحريك الخلفية لتتبع التمرير
    footer.style.backgroundPosition = `center ${scrollY / 3}px`; // تغيير السرعة بناءً على مقدار التمرير
});

const tiktok  = document.querySelectorAll('.footer .tiktok');  // جميع الأيقونات الاجتماعية

tiktok.forEach(icon => {
    icon.addEventListener('click', () => {
        alert(`تم النقر على أيقونة: ${icon.alt}`);  // عرض تنبيه عند النقر على أي أيقونة
    });
});

const twitter  = document.querySelectorAll('.footer .twitter');  // جميع الأيقونات الاجتماعية

twitter.forEach(icon => {
    icon.addEventListener('click', () => {
        alert(`تم النقر على أيقونة: ${icon.alt}`);  // عرض تنبيه عند النقر على أي أيقونة
    });
});
const instagram  = document.querySelectorAll('.footer .instagram');  // جميع الأيقونات الاجتماعية

instagram.forEach(icon => {
    icon.addEventListener('click', () => {
        alert(`تم النقر على أيقونة: ${icon.alt}`);  // عرض تنبيه عند النقر على أي أيقونة
    });
});
const facebook  = document.querySelectorAll('.footer .facebook');  // جميع الأيقونات الاجتماعية

facebook.forEach(icon => {
    icon.addEventListener('click', () => {
        alert(`تم النقر على أيقونة: ${icon.alt}`);  // عرض تنبيه عند النقر على أي أيقونة
    });
});

