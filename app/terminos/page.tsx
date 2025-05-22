import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">Términos y Condiciones</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">Última actualización: 5 de abril de 2025</p>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">1. Objeto y aceptación</h2>
            <p>
              Los presentes Términos y Condiciones tienen por objeto regular el acceso y utilización de la Plataforma
              WaiChatt, que ofrece servicios de automatización de atención al cliente mediante WhatsApp Business
              utilizando agentes de inteligencia artificial.
            </p>
            <p>
              La utilización de la Plataforma atribuye la condición de usuario (en adelante, "Usuario" o "usted") e
              implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en estos
              Términos y Condiciones en la versión publicada en el momento en que el Usuario acceda a la Plataforma. En
              consecuencia, el Usuario debe leer atentamente estos Términos y Condiciones en cada una de las ocasiones
              en que se proponga utilizar la Plataforma.
            </p>
            <p>
              <strong>Importante:</strong> WaiChatt es una plataforma independiente que no está afiliada, no es
              revendedora ni distribuidora oficial de WhatsApp ni Meta. Operamos bajo nuestras propias políticas y
              términos, respetando la propiedad intelectual y las políticas de uso de WhatsApp Business.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">2. Descripción de los servicios de WaiChatt</h2>
            <p>WaiChatt ofrece una plataforma de automatización de atención al cliente que permite a las empresas:</p>
            <ul className="list-disc pl-6">
              <li>Integrar agentes de inteligencia artificial en su cuenta de WhatsApp Business.</li>
              <li>Automatizar respuestas a consultas frecuentes de clientes.</li>
              <li>Gestionar ventas y agendar turnos sin intervención manual.</li>
              <li>Obtener análisis detallados sobre las interacciones con los clientes.</li>
              <li>Escalar conversaciones a agentes humanos cuando sea necesario.</li>
            </ul>
            <p>
              Nos reservamos el derecho a modificar, suspender o interrumpir, temporal o permanentemente, el acceso a
              los servicios con o sin previo aviso. No seremos responsables ante usted ni ante terceros por cualquier
              modificación, suspensión o interrupción de los servicios.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">3. Acceso y uso del servicio</h2>
            <p>Para acceder y utilizar nuestra Plataforma, usted debe:</p>
            <ul className="list-disc pl-6">
              <li>Ser mayor de edad y tener capacidad legal para contratar.</li>
              <li>Completar verazmente los formularios de registro con sus datos.</li>
              <li>Aceptar los presentes Términos y Condiciones.</li>
              <li>Disponer de una cuenta de WhatsApp Business activa.</li>
              <li>Cumplir con las políticas de uso de WhatsApp Business.</li>
            </ul>
            <p>
              El Usuario se compromete a hacer un uso adecuado de los contenidos y servicios que WaiChatt ofrece a
              través de su Plataforma y a no emplearlos para:
            </p>
            <ul className="list-disc pl-6">
              <li>Incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público.</li>
              <li>
                Difundir contenidos o propaganda de carácter racista, xenófobo, pornográfico, de apología del terrorismo
                o que atenten contra los derechos humanos.
              </li>
              <li>
                Provocar daños en los sistemas físicos y lógicos de WaiChatt, de sus proveedores o de terceras personas.
              </li>
              <li>
                Introducir o difundir virus informáticos o cualesquiera otros sistemas físicos o lógicos que sean
                susceptibles de provocar daños en los sistemas de WaiChatt, de sus proveedores o de terceras personas.
              </li>
              <li>Intentar acceder y, en su caso, utilizar las cuentas de correo electrónico de otros usuarios.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">4. Condiciones comerciales</h2>
            <p>
              <strong>5.1. Planes y precios</strong>
            </p>
            <p>
              WaiChatt ofrece diferentes planes de suscripción con distintas características y limitaciones. Los
              precios, características y condiciones de cada plan están disponibles en nuestra página web y pueden estar
              sujetos a cambios. Nos reservamos el derecho a modificar los precios y características de los planes en
              cualquier momento, notificando previamente a los usuarios afectados.
            </p>
            <p>
              <strong>5.2. Facturación y pagos</strong>
            </p>
            <p>
              La facturación se realizará según la periodicidad elegida por el Usuario (mensual o anual). Los pagos se
              realizarán por adelantado mediante los métodos de pago disponibles en la Plataforma. El Usuario autoriza a
              WaiChatt a cargar en su método de pago el importe correspondiente al plan contratado.
            </p>
            <p>
              <strong>5.3. Renovación y cancelación</strong>
            </p>
            <p>
              Las suscripciones se renovarán automáticamente al final de cada período de facturación, a menos que el
              Usuario cancele su suscripción antes de la fecha de renovación. El Usuario puede cancelar su suscripción
              en cualquier momento a través de su panel de control o contactando con nuestro servicio de atención al
              cliente. La cancelación será efectiva al final del período de facturación actual.
            </p>
            <p>
              <strong>5.4. Reembolsos</strong>
            </p>
            <p>
              No se realizarán reembolsos por períodos parciales de suscripción, a menos que la ley aplicable lo exija.
              En caso de que WaiChatt suspenda o termine el servicio por incumplimiento de estos Términos y Condiciones,
              el Usuario no tendrá derecho a reembolso alguno.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">5. Obligaciones del usuario</h2>
            <p>Al utilizar nuestra Plataforma, el Usuario se compromete a:</p>
            <ul className="list-disc pl-6">
              <li>Proporcionar información veraz, exacta y actualizada.</li>
              <li>Mantener la confidencialidad de sus credenciales de acceso.</li>
              <li>Notificar inmediatamente cualquier uso no autorizado de su cuenta.</li>
              <li>
                Obtener el consentimiento explícito (opt-in) de sus clientes antes de enviarles mensajes a través de
                WhatsApp.
              </li>
              <li>
                Cumplir con todas las leyes y regulaciones aplicables, incluyendo las relativas a protección de datos,
                privacidad y comunicaciones electrónicas.
              </li>
              <li>
                No utilizar la Plataforma para enviar mensajes no solicitados (spam) o cualquier contenido que viole las
                políticas de WhatsApp Business.
              </li>
              <li>No utilizar la Plataforma para promocionar productos o servicios ilegales o restringidos.</li>
              <li>Respetar los derechos de propiedad intelectual de WaiChatt y de terceros.</li>
            </ul>
            <p>
              El incumplimiento de estas obligaciones puede resultar en la suspensión o terminación de su cuenta sin
              derecho a reembolso.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">6. Limitación de responsabilidad</h2>
            <p>
              WaiChatt se esfuerza por mantener la Plataforma operativa y libre de errores, pero no garantiza que esté
              disponible de forma ininterrumpida o que esté libre de errores. La Plataforma se proporciona "tal cual" y
              "según disponibilidad", sin garantías de ningún tipo, ya sean expresas o implícitas.
            </p>
            <p>En la medida máxima permitida por la ley aplicable, WaiChatt no será responsable por:</p>
            <ul className="list-disc pl-6">
              <li>Daños indirectos, incidentales, especiales, consecuentes o punitivos.</li>
              <li>Pérdida de beneficios, ingresos, datos, oportunidades de negocio o ahorros anticipados.</li>
              <li>Interrupciones o fallos en el servicio debido a causas fuera de nuestro control razonable.</li>
              <li>Acciones u omisiones de terceros, incluyendo WhatsApp o Meta.</li>
              <li>Contenido generado por los agentes de IA que pueda ser inexacto, inapropiado o incompleto.</li>
              <li>Uso indebido de la Plataforma por parte del Usuario o de terceros.</li>
            </ul>
            <p>
              Nuestra responsabilidad total acumulada derivada de o relacionada con estos Términos y Condiciones no
              excederá el monto pagado por el Usuario a WaiChatt durante los tres (3) meses anteriores al evento que da
              lugar a dicha responsabilidad.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">7. Propiedad intelectual</h2>
            <p>
              Todos los derechos de propiedad intelectual sobre la Plataforma, incluyendo pero no limitado a su código
              fuente, diseño, estructura, selección, coordinación, expresión, aspecto y sensación, así como el contenido
              original creado por WaiChatt, son propiedad exclusiva de WaiChatt o de sus licenciantes.
            </p>
            <p>
              El Usuario no adquiere ningún derecho de propiedad intelectual por el uso de la Plataforma. Se prohíbe
              expresamente:
            </p>
            <ul className="list-disc pl-6">
              <li>
                Copiar, modificar, adaptar, traducir, realizar ingeniería inversa, descompilar o desensamblar cualquier
                parte de la Plataforma.
              </li>
              <li>
                Eliminar, alterar u ocultar cualquier aviso de derechos de autor, marca registrada u otros avisos de
                derechos de propiedad.
              </li>
              <li>Utilizar robots, spiders, scrapers u otros medios automatizados para acceder a la Plataforma.</li>
              <li>Utilizar el nombre, logotipos o marcas de WaiChatt sin nuestra autorización previa por escrito.</li>
            </ul>
            <p>
              <strong>Importante:</strong> WhatsApp y Meta son marcas registradas de sus respectivos propietarios.
              WaiChatt no está afiliado, no es revendedor ni distribuidor oficial de WhatsApp ni Meta, y respeta
              plenamente sus derechos de propiedad intelectual.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">8. Protección de datos</h2>
            <p>
              WaiChatt se compromete a proteger la privacidad y los datos personales de sus usuarios. El tratamiento de
              datos personales se rige por nuestra Política de Privacidad, que forma parte integrante de estos Términos
              y Condiciones.
            </p>
            <p>
              Al utilizar nuestra Plataforma, el Usuario reconoce que ha leído y acepta nuestra Política de Privacidad,
              disponible en{" "}
              <Link href="/privacidad" className="text-[#268656] hover:underline">
                https://waichatt.com/privacidad
              </Link>
              .
            </p>
            <p>
              El Usuario es responsable de obtener el consentimiento explícito (opt-in) de sus clientes antes de
              enviarles mensajes a través de WhatsApp utilizando nuestra Plataforma, así como de cumplir con todas las
              leyes y regulaciones aplicables en materia de protección de datos y privacidad.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">9. Vías de contacto y soporte</h2>
            <p>
              Para cualquier consulta, sugerencia, reclamación o solicitud de soporte técnico, el Usuario puede
              contactar con WaiChatt a través de:
            </p>
            <ul className="list-disc pl-6">
              <li>Correo electrónico: info@waichatt.com</li>
              <li>Formulario de contacto en nuestra página web</li>
              <li>Chat en vivo disponible en nuestra Plataforma (en horario de atención)</li>
              <li>Teléfono: +543816814079 (en horario de atención)</li>
            </ul>
            <p>
              Nuestro horario de atención al cliente es de lunes a viernes, de 9:00 a 18:00 horas (GMT-3), excepto días
              festivos.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">10. Legislación aplicable y jurisdicción</h2>
            <p>
              Estos Términos y Condiciones se regirán e interpretarán de acuerdo con las leyes de Argentina, sin tener en
              cuenta sus disposiciones sobre conflictos de leyes.
            </p>
            <p>
              Cualquier disputa, controversia o reclamación que surja de o en relación con estos Términos y Condiciones,
              incluyendo su existencia, validez, interpretación, cumplimiento, incumplimiento o terminación, será
              sometida a la jurisdicción exclusiva de los tribunales de San miguel de Tucuman, Argentina.
            </p>
            <p>
              No obstante lo anterior, nos reservamos el derecho de presentar una reclamación contra el Usuario en su
              lugar de residencia o en cualquier otro tribunal competente.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">11. Disposiciones generales</h2>
            <p>
              <strong>12.1. Modificaciones</strong>
            </p>
            <p>
              Nos reservamos el derecho a modificar estos Términos y Condiciones en cualquier momento. Las
              modificaciones entrarán en vigor desde su publicación en la Plataforma. El uso continuado de la Plataforma
              después de la publicación de las modificaciones constituirá su aceptación de las mismas.
            </p>
            <p>
              <strong>12.2. Divisibilidad</strong>
            </p>
            <p>
              Si alguna disposición de estos Términos y Condiciones se considera inválida, ilegal o inaplicable, dicha
              disposición se considerará separable y no afectará a la validez y aplicabilidad de las disposiciones
              restantes.
            </p>
            <p>
              <strong>12.3. Cesión</strong>
            </p>
            <p>
              El Usuario no podrá ceder o transferir estos Términos y Condiciones, en todo o en parte, sin el
              consentimiento previo por escrito de WaiChatt. WaiChatt podrá ceder o transferir estos Términos y
              Condiciones libremente, sin restricciones.
            </p>
            <p>
              <strong>12.4. Renuncia</strong>
            </p>
            <p>
              El hecho de que WaiChatt no ejerza o haga valer cualquier derecho o disposición de estos Términos y
              Condiciones no constituirá una renuncia a dicho derecho o disposición.
            </p>
            <p>
              <strong>12.5. Acuerdo completo</strong>
            </p>
            <p>
              Estos Términos y Condiciones, junto con la Política de Privacidad y cualquier otro aviso legal publicado
              por WaiChatt en la Plataforma, constituyen el acuerdo completo entre el Usuario y WaiChatt con respecto al
              uso de la Plataforma.
            </p>
          </section>

          <div className="mt-12 border-t pt-6">
            <p className="text-gray-600">Fecha de entrada en vigor: 5 de abril de 2025</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/" className="text-[#268656] hover:text-[#1f6b4a] font-medium">
            Volver a la página principal
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  )
}
