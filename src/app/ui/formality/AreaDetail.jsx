import ContactItem from "../commons/ContactItem";

export default function AreaDetail({ area, formality }) {
  //console.log(area.contact);

  if (!formality && (!area.children || area.children.length === 0)) {
    return null;
  }

  return (
    <section>
      <div className={`card ${!formality ? 'card-dependencias' : ''}`}>
        <div className="card-header">
          <h6 className="mb-0">{formality ? "Entidad Responsable" : "Dependencias"}</h6>
        </div>
        <div className="card-body">
          {formality && (
            <>
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
            </>
          )}
          {formality ? (
            area.parent && (
              <>
                <hr />
                <div >
                  <b>{area.parent.name}</b>
                </div>
                {area.parent.contact.map((item, index) => (
                  <ContactItem
                    key={item.index}
                    type={item.type}
                    value={item.value}
                    label={item.info}
                  />
                ))}
              </>
            )
          ) : (
            
            area.children && area.children.length > 0 && (
              
              <>
              
                {area.children.map((child, index) => (
                  <div key={child.id || index} className="">
                    <hr/>
                    <h6>{child.name}</h6>
                    {child.contact && child.contact.map((item, idx) => (
                      <ContactItem
                        key={idx}
                        type={item.type}
                        value={item.value}
                        label={item.info}
                      />
                    ))}
                  </div>
                ))}
              </>
            )
          )}

        </div>
      </div>
    </section>
  );
}
