// Inline validation for the application form. Errors appear next to each field;
// the form submits normally to its action URL once everything is filled in.
(function () {
  var form = document.getElementById('apply-form');
  if (!form) return;
  var status = document.getElementById('form-status');

  var messages = {
    name: 'お名前を入力してください。',
    email: 'メールアドレスを入力してください。',
    line_id: 'LINE IDを入力してください。ない場合は「なし」と入力してください。',
    tel: '携帯番号を入力してください。',
    area_time: 'お住まいの地域と、活動できる時間帯を入力してください。',
    career: '現在のお仕事・これまでの美容経験を入力してください。',
    specialty: '得意なメイク・ジャンル・相談できる悩みを入力してください。',
    reason: '活動したい理由を入力してください。',
    agree: '応募には、個人情報の取り扱いへの同意が必要です。'
  };

  function errorFor(field) {
    var id = field.getAttribute('aria-describedby') || '';
    var errId = id.split(' ').filter(function (x) { return /-err$/.test(x); })[0];
    return errId ? document.getElementById(errId) : null;
  }

  function check(field) {
    var msg = '';
    if (field.type === 'checkbox') {
      if (field.required && !field.checked) msg = messages[field.name];
    } else if (field.required && !field.value.trim()) {
      msg = messages[field.name];
    } else if (field.type === 'email' && field.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim())) {
      msg = 'メールアドレスの形式を確認してください（例：name@example.com）。';
    } else if (field.type === 'tel' && field.value && field.value.replace(/[^0-9]/g, '').length < 10) {
      msg = '携帯番号を10〜11桁の数字で入力してください。';
    }
    var err = errorFor(field);
    if (err) err.textContent = msg;
    if (msg) field.setAttribute('aria-invalid', 'true');
    else field.removeAttribute('aria-invalid');
    return !msg;
  }

  var fields = form.querySelectorAll('input, textarea');
  fields.forEach(function (field) {
    // Re-check a field the person is fixing, so its error clears as soon as it is right.
    field.addEventListener('input', function () {
      if (field.getAttribute('aria-invalid') === 'true') check(field);
    });
    field.addEventListener('change', function () {
      if (field.getAttribute('aria-invalid') === 'true') check(field);
    });
  });

  form.addEventListener('submit', function (e) {
    status.textContent = '';
    status.className = 'form-status';
    var firstInvalid = null;
    fields.forEach(function (field) {
      if (!check(field) && !firstInvalid) firstInvalid = field;
    });
    if (firstInvalid) {
      e.preventDefault();
      status.textContent = '入力が必要な項目があります。赤字の案内を確認してください。';
      status.classList.add('is-error');
      firstInvalid.focus();
      return;
    }
    // Until a real destination is set, stop here instead of posting to a placeholder.
    if (form.getAttribute('action').indexOf('[') === 0) {
      e.preventDefault();
      status.textContent = 'まだ送信先が設定されていないため、送信できませんでした。';
      status.classList.add('is-error');
    }
  });
})();
