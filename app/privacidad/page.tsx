import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">Política de Privacidad</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">Última actualización: 5 de abril de 2025</p>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">1. Introducción</h2>
            <p>
              En WaiChatt (en adelante, "nosotros", "nuestra", "nuestro" o "la Plataforma") nos comprometemos a proteger
              y respetar su privacidad. Esta Política de Privacidad establece la base sobre la cual procesamos cualquier
              dato personal que recopilamos de usted o que nos proporciona. Le rogamos que lea detenidamente lo
              siguiente para comprender nuestras prácticas con respecto a sus datos personales y cómo los trataremos.
            </p>
            <p>
              WaiChatt es una plataforma independiente que ofrece servicios de automatización de atención al cliente
              mediante WhatsApp Business utilizando agentes de inteligencia artificial. No estamos afiliados, no somos
              revendedores ni distribuidores oficiales de WhatsApp ni Meta.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">2. Responsable del tratamiento de datos</h2>
            <p>
              El responsable del tratamiento de sus datos personales es WaiChatt, con domicilio social en Coronel zelaya 1102 y correo electrónico de contacto: info@waichatt.com.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">3. Datos que recopilamos y finalidad</h2>
            <p>Podemos recopilar y procesar los siguientes datos:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>Información que usted nos proporciona:</strong> Esto incluye datos que nos proporciona al
                rellenar formularios en nuestra plataforma, al comunicarse con nosotros por teléfono, correo electrónico
                o de otro modo. Estos datos pueden incluir su nombre, dirección de correo electrónico, número de
                teléfono, empresa, cargo y cualquier otra información que decida compartir con nosotros.
              </li>
              <li>
                <strong>Información de comunicaciones:</strong> Cuando utiliza nuestros servicios de automatización a
                través de WhatsApp, recopilamos el contenido de los mensajes intercambiados con nuestros agentes de IA,
                así como metadatos relacionados con estas comunicaciones.
              </li>
              <li>
                <strong>Información técnica:</strong> Podemos recopilar información técnica sobre su dispositivo,
                incluyendo la dirección IP, tipo y versión del navegador, zona horaria, tipos y versiones de plugins del
                navegador, sistema operativo y plataforma.
              </li>
              <li>
                <strong>Información de uso:</strong> Detalles sobre sus visitas a nuestra plataforma, incluyendo el
                flujo de clics completo de URL hacia, a través y desde nuestra plataforma, productos que ha visto o
                buscado, tiempos de respuesta de la página, errores de descarga, duración de las visitas a determinadas
                páginas, información de interacción con la página y métodos utilizados para navegar fuera de la página.
              </li>
            </ul>
            <p>
              <strong>Finalidades del tratamiento:</strong> Utilizamos sus datos personales para los siguientes fines:
            </p>
            <ul className="list-disc pl-6">
              <li>Proporcionar y mejorar nuestros servicios de automatización de atención al cliente.</li>
              <li>Personalizar su experiencia en nuestra plataforma.</li>
              <li>Procesar sus transacciones y gestionar su cuenta.</li>
              <li>Comunicarnos con usted, incluyendo responder a sus consultas y solicitudes.</li>
              <li>Enviarle información sobre nuestros servicios, cambios en nuestros términos o políticas.</li>
              <li>Analizar y mejorar nuestra plataforma y servicios.</li>
              <li>Prevenir actividades potencialmente prohibidas o ilegales.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">4. Base legal del tratamiento</h2>
            <p>Procesamos sus datos personales basándonos en las siguientes bases legales:</p>
            <ul className="list-disc pl-6">
              <li>
                <strong>Ejecución de un contrato:</strong> El procesamiento es necesario para la ejecución de un
                contrato del que usted es parte o para tomar medidas a petición suya antes de celebrar un contrato.
              </li>
              <li>
                <strong>Consentimiento:</strong> Usted ha dado su consentimiento para el procesamiento de sus datos
                personales para uno o varios fines específicos. En particular, obtenemos su consentimiento explícito
                (opt-in) antes de enviarle cualquier comunicación a través de WhatsApp.
              </li>
              <li>
                <strong>Intereses legítimos:</strong> El procesamiento es necesario para los fines de los intereses
                legítimos perseguidos por nosotros o por un tercero, siempre que sobre dichos intereses no prevalezcan
                sus intereses o derechos y libertades fundamentales.
              </li>
              <li>
                <strong>Obligación legal:</strong> El procesamiento es necesario para el cumplimiento de una obligación
                legal a la que estamos sujetos.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">5. Conservación de datos</h2>
            <p>
              Conservaremos sus datos personales solo durante el tiempo necesario para cumplir con los fines para los
              que los recopilamos, incluyendo la satisfacción de cualquier requisito legal, contable o de información.
            </p>
            <p>
              Para determinar el período de retención apropiado para los datos personales, consideramos la cantidad,
              naturaleza y sensibilidad de los datos personales, el riesgo potencial de daño por uso o divulgación no
              autorizados de sus datos personales, los fines para los que procesamos sus datos personales y si podemos
              lograr esos fines a través de otros medios, así como los requisitos legales aplicables.
            </p>
            <p>
              En algunas circunstancias, podemos anonimizar sus datos personales (para que ya no puedan asociarse con
              usted) con fines de investigación o estadísticos, en cuyo caso podemos utilizar esta información
              indefinidamente sin previo aviso.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">6. Compartición con terceros</h2>
            <p>Podemos compartir sus datos personales con las siguientes categorías de terceros:</p>
            <ul className="list-disc pl-6">
              <li>
                <strong>Proveedores de servicios:</strong> Compartimos datos con proveedores de servicios que nos ayudan
                a operar, auditar y mejorar nuestra plataforma. Estos incluyen proveedores de alojamiento, procesamiento
                de pagos, análisis y servicio al cliente.
              </li>
              <li>
                <strong>Socios comerciales:</strong> Podemos compartir información limitada con nuestros socios
                comerciales para ofrecerle determinados productos, servicios o promociones.
              </li>
              <li>
                <strong>Autoridades legales:</strong> Podemos divulgar sus datos personales en respuesta a solicitudes
                legales de autoridades públicas, incluyendo para cumplir con requisitos de seguridad nacional o de
                aplicación de la ley.
              </li>
            </ul>
            <p>
              Exigimos a todos los terceros que respeten la seguridad de sus datos personales y los traten de acuerdo
              con la ley. No permitimos a nuestros proveedores de servicios utilizar sus datos personales para sus
              propios fines y solo les permitimos procesar sus datos personales para fines específicos y de acuerdo con
              nuestras instrucciones.
            </p>
            <p>
              <strong>Importante:</strong> WaiChatt utiliza la API de WhatsApp Business para proporcionar sus servicios.
              Al utilizar nuestra plataforma, usted reconoce que sus datos pueden ser procesados de acuerdo con la
              política de privacidad de WhatsApp, sobre la cual no tenemos control.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">7. Derechos del usuario</h2>
            <p>
              Bajo ciertas circunstancias, usted tiene los siguientes derechos en relación con sus datos personales:
            </p>
            <ul className="list-disc pl-6">
              <li>
                <strong>Derecho de acceso:</strong> Derecho a obtener confirmación de si estamos procesando sus datos
                personales y, en tal caso, acceder a dichos datos.
              </li>
              <li>
                <strong>Derecho de rectificación:</strong> Derecho a solicitar la corrección de datos personales
                inexactos o incompletos.
              </li>
              <li>
                <strong>Derecho de supresión:</strong> Derecho a solicitar la eliminación de sus datos personales en
                determinadas circunstancias.
              </li>
              <li>
                <strong>Derecho a la limitación del tratamiento:</strong> Derecho a solicitar la restricción del
                procesamiento de sus datos personales en determinadas circunstancias.
              </li>
              <li>
                <strong>Derecho a la portabilidad de los datos:</strong> Derecho a recibir sus datos personales en un
                formato estructurado, de uso común y lectura mecánica, y a transmitirlos a otro responsable del
                tratamiento.
              </li>
              <li>
                <strong>Derecho de oposición:</strong> Derecho a oponerse al procesamiento de sus datos personales en
                determinadas circunstancias.
              </li>
              <li>
                <strong>Derecho a retirar el consentimiento:</strong> Derecho a retirar su consentimiento en cualquier
                momento cuando el procesamiento se base en su consentimiento.
              </li>
            </ul>
            <p>
              Si desea ejercer alguno de estos derechos, póngase en contacto con nosotros a través de
              privacy@waichatt.com. No cobraremos ninguna tarifa por responder a cualquier solicitud para ejercer sus
              derechos, y responderemos a todas las solicitudes legítimas dentro de un mes.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">8. Seguridad de la información</h2>
            <p>
              Hemos implementado medidas de seguridad apropiadas para evitar que sus datos personales se pierdan,
              utilicen o accedan de forma no autorizada, se modifiquen o divulguen. Además, limitamos el acceso a sus
              datos personales a aquellos empleados, agentes, contratistas y otros terceros que tienen una necesidad
              comercial de conocerlos. Solo procesarán sus datos personales según nuestras instrucciones y están sujetos
              a un deber de confidencialidad.
            </p>
            <p>
              Hemos implementado procedimientos para tratar cualquier sospecha de violación de datos personales y le
              notificaremos a usted y a cualquier regulador aplicable de una violación cuando estemos legalmente
              obligados a hacerlo.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">9. Uso de cookies</h2>
            <p>
              Nuestra plataforma utiliza cookies y tecnologías similares para distinguirlo de otros usuarios. Esto nos
              ayuda a proporcionarle una buena experiencia cuando navega por nuestra plataforma y también nos permite
              mejorarla.
            </p>
            <p>
              Una cookie es un pequeño archivo de texto que se almacena en su dispositivo cuando visita un sitio web.
              Utilizamos los siguientes tipos de cookies:
            </p>
            <ul className="list-disc pl-6">
              <li>
                <strong>Cookies estrictamente necesarias:</strong> Necesarias para el funcionamiento de nuestra
                plataforma.
              </li>
              <li>
                <strong>Cookies analíticas/de rendimiento:</strong> Nos permiten reconocer y contar el número de
                visitantes y ver cómo los visitantes se mueven por nuestra plataforma.
              </li>
              <li>
                <strong>Cookies de funcionalidad:</strong> Se utilizan para reconocerlo cuando regresa a nuestra
                plataforma.
              </li>
              <li>
                <strong>Cookies de orientación:</strong> Registran su visita a nuestra plataforma, las páginas que ha
                visitado y los enlaces que ha seguido.
              </li>
            </ul>
            <p>
              Puede configurar su navegador para rechazar todas o algunas cookies, o para alertarle cuando los sitios
              web establecen o acceden a cookies. Si deshabilita o rechaza cookies, tenga en cuenta que algunas partes
              de esta plataforma pueden volverse inaccesibles o no funcionar correctamente.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">10. Contacto y ejercicio de derechos</h2>
            <p>
              Si tiene alguna pregunta sobre esta Política de Privacidad o desea ejercer cualquiera de sus derechos,
              puede ponerse en contacto con nosotros a través de:
            </p>
            <ul className="list-disc pl-6">
              <li>Correo electrónico: info@waichatt.com</li>
              <li>Dirección postal: Coronel zelaya 1102</li>
            </ul>
            <p>
              Si no está satisfecho con nuestra respuesta o cree que estamos procesando sus datos personales de manera
              ilegal, tiene derecho a presentar una reclamación ante la autoridad de protección de datos
              correspondiente.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">11. Cambios en nuestra política de privacidad</h2>
            <p>
              Cualquier cambio que podamos hacer en nuestra política de privacidad en el futuro se publicará en esta
              página y, cuando corresponda, se le notificará por correo electrónico. Revise regularmente esta página
              para estar al tanto de cualquier cambio, ya que son vinculantes para usted.
            </p>
          </section>

          <div className="mt-12 border-t pt-6">
            <p className="text-gray-600">Fecha de última actualización: 5 de abril de 2025</p>
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
