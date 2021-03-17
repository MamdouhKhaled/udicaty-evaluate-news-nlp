export function ui(data) {
    console.log(data);
    return `
        <div class="result">
        <table style="width:100%">
        <tr>
          <td>agreement</td>
          <td>${data.agreement}</td>
        </tr>

        <tr>
        <td>confidence</td>
        <td>${data.confidence}</td>
      </tr>

      <tr>
      <td>irony</td>
      <td>${data.irony}</td>
    </tr>

    <tr>
    <td>subjectivity</td>
    <td>${data.subjectivity}</td>
  </tr>

      </table>
        </div>
    `
}