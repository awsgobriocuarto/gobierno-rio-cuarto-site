import ContactItem from "../commons/ContactItem";

export default function AreaDetail({ area }) {
  //console.log(area.contact);

  return (
    <section>
      <div className="card">
        <div className="card-header">
          <h6 className="mb-0">Entidad Responsable</h6>
        </div>
        <div className="card-body">
          <h5>{area.name}</h5>
          {area.contact.map((item, index) => (
            // <p key={item.value} className="mb-0">
            //   {item.value}
            // </p>
            <ContactItem
              key={item.index}
              type={item.type}
              value={item.value}
              label={item.info}
            />
          ))}
          {area.parent && (
            <>
              <hr />
              <div>
                <b>{area.parent.name}</b>
              </div>
              {area.parent.contact.map((item, index) => (
                // 
                <ContactItem
                  key={item.index}
                  type={item.type}
                  value={item.value}
                  label={item.info}
                />
              ))}
            </>
          )}

        </div>
      </div>
    </section>
  );
}
