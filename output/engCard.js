const engCard = ({name, id, email, github}) => {
    return `<div class="row">
    <div class="col s4 m4">
      <div class="card brown lighten-2">
        <div class="card-content white-text">
          <span class="card-title">Engineer</span>
          <h2> ${name} </h2>
          <p>Employee Id: ${id} </p>
          <p><i class="fab fa-github"></i><span> Github: </span>
            <a href="https://github.com/${github}" target="_blank" class="white-text"> ${github} </span></p>
        </div>
        <div class="card-action">
            <i class="far fa-envelope"></i>
            <a href="mailto:${email}" class="white-text">${email} </a>
        </div>
      </div>
    </div>`
}

module.exports = engCard