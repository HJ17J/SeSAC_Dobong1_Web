const tbody = document.querySelector('tbody');

// 방명록 등록
// POST /visitor
function createVisitor() {
  const form = document.forms['visitor-form'];
  if (form.name.value.length === 0 || form.comment.value.length === 0) {
    alert('이름과 내용을 모두 기입해주세요.');
    return;
  }
  if (form.name.value.length > 6) {
    alert('이름은 6글자 이하로 작성해주세요.');
    return;
  }
  axios({
    method: 'POST',
    url: '/visitor',
    data: {
      name: form.name.value,
      comment: form.comment.value,
    },
  })
    .then((res) => {
      console.log(res.data); // {id, name, comment}
      const data = res.data;
      const html = `
      <tr>
        <td>${data.id}</td>
        <td>${data.name}</td>
        <td>${data.comment}</td>
        <td><button type="button" onclick="editVisitor('<%= visitors[i].id%>')">수정</button></td>
        <td><button type="button" onclick="deleteVisitor(this,'<%= visitors[i].id %>')">삭제</button></td>
      </tr>
      `;
      tbody.insertAdjacentHTML('beforeend', html);
    })
    .catch((err) => console.log(err));
}

// 방명록 삭제
// DELETE /visitor
function deleteVisitor(btn, id) {
  console.log(btn);
  console.log(id);
  axios({
    method: 'DELETE',
    url: '/visitor',
    data: { id: id },
  })
    .then((res) => {
      console.log(res.data);
      alert(res.data);
      // 요소 삭제
      // 1. parentElement
      btn.parentElement.parentElement.remove();

      // 2. closet()
      // 특정 선택자를 가진 가장 가까운 조상 요소를 찾음
      // btn.closet('tr_${id}').remove();
    })
    .catch((err) => console.log(err));
}

// 방명록 수정
// GET /visitor/:id
// 1. 수정을 위한 입력창으로 변경
// 2. 수정 버튼 클릭 시 등록창 input에 기존 데이터 가져옴
//      - 해당 데이터 조회 필요
const btnGroup = document.querySelector('#btn-group');
function editVisitor(id) {
  axios({
    method: 'GET',
    url: `/visitor/${id}`, // params 따로 적지 않고 url에 같이 넘김
    // params: { id: id },
  })
    .then((res) => {
      const data = res.data;
      console.log(data);
      const form = document.forms['visitor-form'];
      form.name.value = data.NAME;
      form.comment.value = data.COMMENT;
    })
    .catch((err) => {
      console.log(err);
    });
  const html = `
    <td><button type="button" onclick="editDo('${id}')">수정</button></td>
    <td><button type="button" onclick="editCancel()">취소</button></td>
    `;
  btnGroup.innerHTML = html;
}

// PATCH /visitor
function editDo(id) {
  const form = document.forms['visitor-form'];
  axios({
    method: 'PATCH',
    url: '/visitor',
    data: {
      id: id,
      name: form.name.value,
      comment: form.comment.value,
    },
  }).then((res) => {
    console.log('update data', res.data);
    const data = res.data;
    const children = document.querySelector(`#tr_${id}`).children;
    console.log(children);
    children[0].textContent = data.id;
    children[1].textContent = data.name;
    children[2].textContent = data.comment;
  });
  editCancel();
}

function editCancel() {
  const form = document.forms['visitor-form'];
  form.name.value = '';
  form.comment.value = '';
  const html = `
    <button type="button" onclick="createVisitor()">등록</button>
    `;
  btnGroup.innerHTML = html;
}
