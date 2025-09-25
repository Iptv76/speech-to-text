# Asistente de Voz para Decodificador

Esta es una aplicación web que implementa la funcionalidad de reconocimiento de voz (Speech to Text) para un decodificador, con un diseño moderno y optimizado para dispositivos móviles.

## Características

- Interfaz moderna y responsiva con un botón de micrófono
- Reconocimiento de voz utilizando la Web Speech API gratuita del navegador
- Fallback automático a Azure Speech cuando hay problemas de red
- Manejo mejorado de errores de red y reconocimiento
- Transcripción de voz en tiempo real
- Diseñada para funcionar como aplicación independiente (PWA)
- Optimizada para Chromium (navegador del decodificador)

## Opciones de Despliegue

Para que la aplicación sea accesible desde el decodificador, puedes utilizar cualquiera de estas opciones:

### 1. GitHub Pages (Recomendado)

1. Sube el repositorio a GitHub
2. Activa GitHub Pages en la configuración del repositorio
3. La URL será: `https://[tu-usuario].github.io/STT/stt_app.html`

### 2. Netlify

1. Crea una cuenta en [Netlify](https://www.netlify.com/)
2. Arrastra y suelta la carpeta del proyecto en la interfaz de Netlify
3. Netlify generará una URL automáticamente

### 3. Vercel

1. Crea una cuenta en [Vercel](https://vercel.com/)
2. Importa el repositorio desde GitHub o sube los archivos directamente
3. Vercel generará una URL automáticamente

### 4. Servidor Web Local (para pruebas)

Si deseas probar la aplicación localmente antes de desplegarla:

```bash
# Usando Python
python -m http.server 8000

# Usando Node.js
npx serve
```

Luego accede a `http://localhost:8000/stt_app.html`

## Configuración de Azure Speech (Opcional)

Para utilizar Azure Speech como fallback:

1. Crea una cuenta en [Azure](https://azure.microsoft.com/)
2. Crea un recurso de Speech Service
3. Obtén la clave de suscripción y la región
4. Actualiza las constantes en `stt_app.html`:
   ```javascript
   const AZURE_KEY = 'tu-clave-de-azure';
   const AZURE_REGION = 'eastus'; // o tu región
   ```

## Integración con el Decodificador

Para integrar esta aplicación con el decodificador:

1. Despliega la aplicación usando uno de los métodos anteriores
2. Configura el icono en el decodificador para que abra la URL de la aplicación
3. Al hacer clic en el icono, la aplicación se abrirá y automáticamente:
   - Iniciará el cliente con `STBOutput.getInstance().makeRequestWs("saia.get_status",{})`
   - Abrirá el micrófono con `STBOutput.getInstance().makeRequestWs("saia.start",{"type":"transcript"})`
   - Mostrará la transcripción en tiempo real

## Notas Importantes

- La aplicación incluye un modo de simulación para pruebas en navegadores normales
- Para el funcionamiento real en el decodificador, se requiere que el objeto `STBOutput` esté disponible
- La interfaz es responsive y se adaptará a diferentes tamaños de pantalla