import { useState } from "react";

import { Container } from "./styles";

export function Button({ icon: Icon, ...rest }) {
  const [hover, setHover] = useState(false);

  return (
    <Container>
      <button
        type="button"
        {...rest}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {Icon && <Icon size={20} color={hover ? "#666f99" : "#787fac68"} />}
      </button>
    </Container>
  );
}
